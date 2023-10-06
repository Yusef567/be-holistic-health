import db from "../connection";
import seed from "../seeds/seed";
import testData from "../data/test-data/index";
import request from "supertest";
import app from "../app";
import jwt from "jsonwebtoken";
import "jest-sorted";
import { Category, FirstQuiz, Comment } from "../interfaces/interfaces";
import endpoints from "../endpoints.json";

let accessToken: string;
let refreshToken: string;
let quizPostToken: string;

beforeAll(async () => {
  const testUser = {
    username: "Alex456",
    password: "Password123",
  };

  const response = await request(app)
    .post("/api/auth/login")
    .send(testUser)
    .expect(200);

  accessToken = response.body.accessToken;

  const refreshTokenCookie = response.headers["set-cookie"].find(
    (cookie: string) => cookie.includes("refreshToken")
  );
  refreshToken = refreshTokenCookie.split("=")[1].split(";")[0];

  const healthcareProfessional = {
    username: "Mark@healthcareclinic.com",
    password: "chocolate123",
  };

  const loginResponse = await request(app)
    .post("/api/auth/login")
    .send(healthcareProfessional)
    .expect(200);

  quizPostToken = loginResponse.body.accessToken;
});

beforeEach(() => {
  return seed(testData);
});

afterAll(() => {
  db.end();
});

describe("POST /api/auth/login", () => {
  it("200: should respond with an access token and set the refresh token as an HTTP-only cookie", async () => {
    const testUser = {
      username: "Alex456",
      password: "Password123",
    };

    const response = await request(app)
      .post("/api/auth/login")
      .send(testUser)
      .expect(200);

    const refreshTokenCookie = response.headers["set-cookie"].find(
      (cookie: string) => cookie.includes("refreshToken")
    );

    expect(refreshTokenCookie).toContain("HttpOnly");
    expect(response.body).toEqual({ accessToken: expect.any(String) });
    expect(typeof refreshTokenCookie).toBe("string");
  });
  it("400: should respond with a msg if missing the username or password", async () => {
    const { body } = await request(app)
      .post("/api/auth/login")
      .send({})
      .expect(400);

    expect(body.msg).toBe("Username and password are required");
  });
  it("401: should respond with a msg if passed a non existent user", async () => {
    const testUser = {
      username: "Harry20",
      password: "Password123",
    };

    const { body } = await request(app)
      .post("/api/auth/login")
      .send(testUser)
      .expect(401);

    expect(body.msg).toBe("User not found");
  });
  it("401: should respond with a msg if passed an incorrect password", async () => {
    const testUser = {
      username: "Alex456",
      password: "Password1",
    };

    const { body } = await request(app)
      .post("/api/auth/login")
      .send(testUser)
      .expect(401);

    expect(body.msg).toBe("Incorrect password");
  });
});

describe("GET /api/auth/protected", () => {
  it("200: should respond with a msg of Authenticated successfully if the JWT access token is valid", async () => {
    const {
      body: { msg },
    } = await request(app)
      .get("/api/auth/protected")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(200);

    expect(msg).toBe("Authenticated successfully");
  });
  it("401: should respond with a msg of Unauthorized if the JWT access token is invalid", async () => {
    const invalidToken = "helloWorld";

    const {
      body: { msg },
    } = await request(app)
      .get("/api/auth/protected")
      .set("Authorization", `Bearer ${invalidToken}`)
      .expect(401);

    expect(msg).toBe("Unauthorized");
  });
  it("401: should respond with a msg of Unauthorized if the JWT access token is missing ", async () => {
    const {
      body: { msg },
    } = await request(app)
      .get("/api/auth/protected")
      .set("Authorization", "Bearer")
      .expect(401);

    expect(msg).toBe("Unauthorized");
  });
  it("401: should respond with a msg of Unauthorized if the JWT access token has expired", async () => {
    const expiredAccessToken = jwt.sign(
      { id: 2 },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1ms",
      }
    );

    const {
      body: { msg },
    } = await request(app)
      .get("/api/auth/protected")
      .set("Authorization", `Bearer ${expiredAccessToken}`)
      .expect(401);

    expect(msg).toBe("Unauthorized");
  });
});

describe("POST /api/users", () => {
  it("201: should respond with the newly created user object with the correct properties", async () => {
    const newUser = {
      username: "John123",
      password: "Water123",
    };

    const { body } = await request(app)
      .post("/api/users")
      .send(newUser)
      .expect(201);

    const { user } = body;
    expect(user).toEqual({ user_id: 4, username: "John123" });
  });
  it("400: should repsond with a msg if the username or password properties are missing", async () => {
    const newUser = {
      username: "John123",
    };

    const { body } = await request(app)
      .post("/api/users")
      .send(newUser)
      .expect(400);

    expect(body.msg).toBe("Username and password are required");
  });
  it("400: should respond a msg if sent an empty username or password", async () => {
    const newUser = {
      username: "",
      password: "Password123",
    };

    const { body } = await request(app)
      .post("/api/users")
      .send(newUser)
      .expect(400);

    expect(body.msg).toBe("Username and password are required");
  });
  it("409: should respond with a msg if passed a username that already exists", async () => {
    const newUser = {
      username: "Alex456",
      password: "newPassword123",
    };

    const { body } = await request(app)
      .post("/api/users")
      .send(newUser)
      .expect(409);

    expect(body.msg).toBe("Username already exists");
  });
});

describe("POST /api/auth/refresh-token", () => {
  it("200: should respond with a new access token if passed a valid refresh token", async () => {
    const setRefreshTokenQuery =
      "UPDATE users SET refresh_token = $1 WHERE user_id = 2 RETURNING *";
    await db.query(setRefreshTokenQuery, [refreshToken]);

    const { body } = await request(app)
      .post("/api/auth/refresh-token")
      .set("Cookie", `refreshToken=${refreshToken}`)
      .expect(200);

    const { accessToken } = body;
    expect(typeof accessToken).toBe("string");

    const protectedRequest = await request(app)
      .get("/api/auth/protected")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(200);

    expect(protectedRequest.body.msg).toBe("Authenticated successfully");
  });
  it("401: should respond with a msg if the refresh token cookie is missing", async () => {
    const { body } = await request(app)
      .post("/api/auth/refresh-token")
      .expect(401);

    expect(body.msg).toBe("Refresh token not found");
  });
  it("401: should respond with a msg if passed an invalid refresh token", async () => {
    const invalidRefreshToken = "hello-world";

    const { body } = await request(app)
      .post("/api/auth/refresh-token")
      .set("Cookie", `refreshToken=${invalidRefreshToken}`)
      .expect(401);

    expect(body.msg).toBe("Invalid refresh token");
  });
  it("401: should respond with a msg if passed an expired refresh token", async () => {
    const expiredRefreshToken = jwt.sign(
      { id: 2 },
      process.env.REFRESH_TOKEN_SECRET as string,
      { expiresIn: "1ms" }
    );

    const { body } = await request(app)
      .post("/api/auth/refresh-token")
      .set("Cookie", `refreshToken=${expiredRefreshToken}`)
      .expect(401);

    expect(body.msg).toBe("Refresh token has expired");
  });
});

describe("POST /api/auth/logout", () => {
  it("200: should respond with a success msg if the refresh token is valid", async () => {
    const testUser = {
      username: "Tom123",
      password: "StrongPassword",
    };

    const loginResponse = await request(app)
      .post("/api/auth/login")
      .send(testUser)
      .expect(200);

    const refreshTokenCookie = loginResponse.headers["set-cookie"].find(
      (cookie: string) => cookie.includes("refreshToken")
    );

    const refreshTokenStr = refreshTokenCookie.split("=")[1].split(";")[0];

    const logoutResponse = await request(app)
      .post("/api/auth/logout")
      .set("Cookie", `refreshToken=${refreshTokenStr}`)
      .expect(200);

    const { body } = logoutResponse;
    expect(body.msg).toBe("Logout successful");
  });
  it("200: should clear the refresh token cookie value and set an expired expiration date", async () => {
    const testUser = {
      username: "Tom123",
      password: "StrongPassword",
    };

    const loginResponse = await request(app)
      .post("/api/auth/login")
      .send(testUser)
      .expect(200);

    const refreshTokenCookie = loginResponse.headers["set-cookie"].find(
      (cookie: string) => cookie.includes("refreshToken")
    );

    const refreshTokenStr = refreshTokenCookie.split("=")[1].split(";")[0];

    const logoutResponse = await request(app)
      .post("/api/auth/logout")
      .set("Cookie", `refreshToken=${refreshTokenStr}`)
      .expect(200);

    const cookies = logoutResponse.headers["set-cookie"];
    const expirationString = cookies[0].split("Expires=")[1].split(";")[0];
    const expirationDate = new Date(expirationString);
    const currentDate = new Date();

    expect(expirationDate.getTime()).toBeLessThan(currentDate.getTime());
    expect(cookies[0]).toMatch(/^refreshToken=;/);
  });
  it("200: should clear the refresh token in the database", async () => {
    const testUser = {
      username: "Tom123",
      password: "StrongPassword",
    };

    const loginResponse = await request(app)
      .post("/api/auth/login")
      .send(testUser)
      .expect(200);

    const refreshTokenCookie = loginResponse.headers["set-cookie"].find(
      (cookie: string) => cookie.includes("refreshToken")
    );

    const refreshTokenStr = refreshTokenCookie.split("=")[1].split(";")[0];

    await request(app)
      .post("/api/auth/logout")
      .set("Cookie", `refreshToken=${refreshTokenStr}`)
      .expect(200);

    const user = await db.query(
      "SELECT * FROM users where username = 'Tom123'"
    );
    expect(user.rows[0].refresh_token).toBeNull();
  });
  it("401: should respond with a msg if refresh token is missing", async () => {
    const { body } = await request(app).post("/api/auth/logout").expect(401);

    expect(body.msg).toBe("Refresh token not found");
  });
  it("401: should respond with a msg if refresh token is invalid", async () => {
    const { body } = await request(app)
      .post("/api/auth/logout")
      .set("Cookie", "refreshToken=hello-world")
      .expect(401);

    expect(body.msg).toBe("Invalid refresh token");
  });
  it("401: should respond with a msg if passed an expired refresh token", async () => {
    const expiredRefreshToken = jwt.sign(
      { id: 1 },
      process.env.REFRESH_TOKEN_SECRET as string,
      { expiresIn: "1ms" }
    );

    const { body } = await request(app)
      .post("/api/auth/logout")
      .set("Cookie", `refreshToken=${expiredRefreshToken}`)
      .expect(401);

    expect(body.msg).toBe("Refresh token has expired");
  });
});

describe("GET /api/categories", () => {
  it("200: should respond with an array of category objects", async () => {
    const { body } = await request(app).get("/api/categories").expect(200);

    const { categories } = body;
    expect(categories).toBeInstanceOf(Array);
    expect(categories).toHaveLength(5);
    categories.forEach((category: Category) => {
      expect(category).toEqual({
        category_id: expect.any(Number),
        category: expect.any(String),
      });
    });
  });
});

describe("Non existent Paths", () => {
  it("404: should respond with a msg if the path does not exist", async () => {
    const { body } = await request(app).get("/api/catagories").expect(404);
    const response = await request(app).get("/helloWorld").expect(404);

    expect(body.msg).toBe("Path not found");
    expect(response.body.msg).toBe("Path not found");
  });
});

describe("GET /api/quizzes", () => {
  it("200: should respond with an array of quiz objects with the correct properties", async () => {
    const { body } = await request(app).get("/api/quizzes").expect(200);

    const { quizzes } = body;

    expect(quizzes).toBeInstanceOf(Array);
    quizzes.forEach((quiz: FirstQuiz) => {
      expect(quiz).toMatchObject({
        quiz_id: expect.any(Number),
        quiz_name: expect.any(String),
        quiz_img: expect.any(String),
        category: expect.any(String),
        description: expect.any(String),
        username: expect.any(String),
        user_id: expect.any(Number),
        release_date: expect.any(String),
        likes: expect.any(Number),
      });
    });
  });
  describe("GET /api/quizzes?queries", () => {
    it("200: should default to sort the quizzes by release_date in descending order", async () => {
      const { body } = await request(app).get("/api/quizzes").expect(200);

      const { quizzes } = body;
      expect(quizzes).toBeSortedBy("release_date", { descending: true });
    });
    it("200: should respond with an array of quizzes from the queried category", async () => {
      const { body } = await request(app)
        .get("/api/quizzes?category=Travel")
        .expect(200);

      const { quizzes } = body;

      expect(quizzes).toHaveLength(2);
      quizzes.forEach((quiz: FirstQuiz) => {
        expect(quiz.category).toBe("Travel");
      });
    });
    it("200: should respond with an empty array if passed a valid category that has no associated quizzes ", async () => {
      const { body } = await request(app)
        .get("/api/quizzes?category=Cars")
        .expect(200);

      const { quizzes } = body;
      expect(quizzes).toBeInstanceOf(Array);
      expect(quizzes).toHaveLength(0);
    });
    it("200: should repsond with an array of quizzes sorted by the specified column", async () => {
      const { body } = await request(app)
        .get("/api/quizzes?sort_by=likes")
        .expect(200);

      const { quizzes } = body;
      expect(quizzes).toBeSortedBy("likes", { descending: true });
    });
    it("200: should respond with an array of quizzes sorted in ascending order by quiz name", async () => {
      const { body } = await request(app)
        .get("/api/quizzes?sort_by=quiz_name&order=asc")
        .expect(200);

      const { quizzes } = body;
      expect(quizzes).toBeSortedBy("quiz_name", { descending: false });
    });
    it("400: should respond with a msg if passed a non exsitent column name", async () => {
      const { body } = await request(app)
        .get("/api/quizzes?sort_by=price")
        .expect(400);

      expect(body.msg).toBe("Invalid column specified");
    });
    it("400: should respond with a msg if passed an invalid order_by query", async () => {
      const { body } = await request(app)
        .get("/api/quizzes?sort_by=likes&order=high")
        .expect(400);

      expect(body.msg).toBe("Invalid order query");
    });
    it("404: should respond with a msg if passed a category that does not exist", async () => {
      const { body } = await request(app)
        .get("/api/quizzes?category=Food")
        .expect(404);

      expect(body.msg).toBe("Category not found");
    });
  });
  describe("GET /api/quizzes?pagination", () => {
    it("200: should repsond with a default limit of 10 quizzes and a total count", async () => {
      const { body } = await request(app).get("/api/quizzes").expect(200);

      const { quizzes, totalCount } = body;
      expect(totalCount).toBe(10);
      expect(quizzes).toHaveLength(10);
    });
    it("200:  should respond with the correct quizzes when passed a category and limit", async () => {
      const { body } = await request(app)
        .get("/api/quizzes?category=Travel&limit=1")
        .expect(200);

      const { quizzes, totalCount } = body;
      expect(totalCount).toBe(2);
      expect(quizzes).toHaveLength(1);
      quizzes.forEach((quiz: FirstQuiz) =>
        expect(quiz.category).toBe("Travel")
      );
    });
    it("200: should respond with the correct amount of quizzes when passed a page", async () => {
      const { body } = await request(app)
        .get("/api/quizzes?limit=5&p=2")
        .expect(200);

      const { quizzes, totalCount } = body;
      expect(totalCount).toBe(10);
      expect(quizzes).toHaveLength(5);
    });
    it("200: should respond with an empty array when passed a page that exceeds the available pages", async () => {
      const { body } = await request(app)
        .get("/api/quizzes?limit=5&p=3")
        .expect(200);

      const { quizzes, totalCount } = body;
      expect(totalCount).toBe(10);
      expect(quizzes).toBeInstanceOf(Array);
      expect(quizzes).toHaveLength(0);
    });
    it("400: should respond with a msg if passed an invalid limit", async () => {
      const { body } = await request(app)
        .get("/api/quizzes?limit=half&p=1")
        .expect(400);

      expect(body.msg).toBe("Invalid limit query specified");
    });
    it("400: should respond with a msg if passed an invalid page", async () => {
      const { body } = await request(app)
        .get("/api/quizzes?limit=5&p=second")
        .expect(400);

      expect(body.msg).toBe("Invalid page query specified");
    });
  });
});

describe("GET /api/quizzes/:quiz_id", () => {
  it("200: should respond with the correct keys and values for the quiz_id passed ", async () => {
    const { body } = await request(app).get("/api/quizzes/4").expect(200);

    const questionsAndAnswers = [
      {
        question_id: 25,
        question_text: "What is the tallest waterfall in the world?",
        answers: [
          { answer_id: 97, answer_text: "Angel Falls", is_correct: true },
          { answer_id: 98, answer_text: "Niagara Falls", is_correct: false },
          { answer_id: 99, answer_text: "Iguazu Falls", is_correct: false },
          {
            answer_id: 100,
            answer_text: "Victoria Falls",
            is_correct: false,
          },
        ],
      },
      {
        question_id: 26,
        question_text:
          "Which country is home to the famous ancient city of Petra?",
        answers: [
          { answer_id: 101, answer_text: "Jordan", is_correct: true },
          { answer_id: 102, answer_text: "Greece", is_correct: false },
          { answer_id: 103, answer_text: "Italy", is_correct: false },
          { answer_id: 104, answer_text: "Egypt", is_correct: false },
        ],
      },
      {
        question_id: 27,
        question_text: "What is the official language of Brazil?",
        answers: [
          { answer_id: 105, answer_text: "Portuguese", is_correct: true },
          { answer_id: 106, answer_text: "Spanish", is_correct: false },
          { answer_id: 107, answer_text: "French", is_correct: false },
          { answer_id: 108, answer_text: "English", is_correct: false },
        ],
      },
      {
        question_id: 28,
        question_text:
          "Which country is famous for its beautiful tulip fields?",
        answers: [
          { answer_id: 109, answer_text: "Netherlands", is_correct: true },
          { answer_id: 110, answer_text: "Germany", is_correct: false },
          { answer_id: 111, answer_text: "France", is_correct: false },
          { answer_id: 112, answer_text: "Denmark", is_correct: false },
        ],
      },
      {
        question_id: 29,
        question_text:
          "What is the name of the iconic statue in Rio de Janeiro, Brazil?",
        answers: [
          {
            answer_id: 113,
            answer_text: "Christ the Redeemer",
            is_correct: true,
          },
          { answer_id: 114, answer_text: "The Colosseum", is_correct: false },
          {
            answer_id: 115,
            answer_text: "The Great Wall",
            is_correct: false,
          },
          {
            answer_id: 116,
            answer_text: "The Statue of Liberty",
            is_correct: false,
          },
        ],
      },
      {
        question_id: 30,
        question_text:
          "Which city is renowned for its historical ruins of Machu Picchu?",
        answers: [
          { answer_id: 117, answer_text: "Cusco", is_correct: true },
          { answer_id: 118, answer_text: "Athens", is_correct: false },
          { answer_id: 119, answer_text: "Cairo", is_correct: false },
          { answer_id: 120, answer_text: "Rome", is_correct: false },
        ],
      },
      {
        question_id: 31,
        question_text: "What is the currency used in Japan?",
        answers: [
          { answer_id: 121, answer_text: "Japanese Yen", is_correct: true },
          { answer_id: 122, answer_text: "Euro", is_correct: false },
          {
            answer_id: 123,
            answer_text: "Pound Sterling",
            is_correct: false,
          },
          { answer_id: 124, answer_text: "US Dollar", is_correct: false },
        ],
      },
      {
        question_id: 32,
        question_text:
          "Which African country is known for its wildlife safaris?",
        answers: [
          { answer_id: 125, answer_text: "Kenya", is_correct: true },
          { answer_id: 126, answer_text: "Madagascar", is_correct: false },
          { answer_id: 127, answer_text: "Tanzania", is_correct: false },
          { answer_id: 128, answer_text: "South Africa", is_correct: false },
        ],
      },
    ];

    const { quiz } = body;
    expect(quiz).toEqual({
      quiz_id: 4,
      quiz_name: "Travel Destinations Trivia",
      category: "Travel",
      user_id: 1,
      username: "Tom123",
      release_date: expect.any(String),
      description:
        "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
      quiz_img:
        "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likes: 1,
      comment_count: 0,
      questions: [...questionsAndAnswers],
    });
  });
  it("200: should respond with a comment_count of 0 if the quiz has no comments", async () => {
    const { body } = await request(app).get("/api/quizzes/7").expect(200);

    const { quiz } = body;
    expect(quiz.comment_count).toBe(0);
  });
  it("400: should respond with a msg if passed an invalid quiz_id", async () => {
    const {
      body: { msg },
    } = await request(app).get("/api/quizzes/first").expect(400);
    expect(msg).toBe("Invalid quiz_id specified");
  });
  it("404: should respond with a msg if passed a valid but non existent quiz_id", async () => {
    const {
      body: { msg },
    } = await request(app).get("/api/quizzes/50").expect(404);

    expect(msg).toBe("quiz_id not found");
  });
});

describe("GET /api/comments/quiz/:quiz_id", () => {
  it("200: should respond with an array of comments for the quiz_id passed", async () => {
    const { body } = await request(app).get("/api/comments/quiz/1").expect(200);

    const { comments } = body;
    expect(comments).toBeInstanceOf(Array);
    expect(comments).toHaveLength(10);
    comments.forEach((comment: Comment) => {
      expect(comment).toMatchObject({
        comment_id: expect.any(Number),
        quiz_id: 1,
        created_at: expect.any(String),
        comment_text: expect.any(String),
        username: expect.any(String),
        user_id: expect.any(Number),
        likes: expect.any(Number),
      });
    });
  });
  it("200: should respond with the comments ordered by newest in descending order", async () => {
    const { body } = await request(app).get("/api/comments/quiz/1").expect(200);

    const { comments } = body;
    expect(comments).toBeSortedBy("created_at", {
      descending: true,
    });
  });
  it("200: should respond with an empty array if passed a quiz_id that has no comments", async () => {
    const { body } = await request(app).get("/api/comments/quiz/2").expect(200);

    const { comments } = body;
    expect(comments).toBeInstanceOf(Array);
    expect(comments).toHaveLength(0);
  });
  it("400: should repsond a with a msg if passed an invalid quiz_id", async () => {
    const {
      body: { msg },
    } = await request(app).get("/api/comments/quiz/four").expect(400);

    expect(msg).toBe("Invalid quiz_id specified");
  });
  it("404: should respond with a msg if passed a valid but non existent quiz_id", async () => {
    const {
      body: { msg },
    } = await request(app).get("/api/comments/quiz/20").expect(404);

    expect(msg).toBe("quiz_id not found");
  });
  describe("GET /api/comments/quiz/:quiz_id?pagination", () => {
    it("200: should respond with a default limit of 10 comments and a total count", async () => {
      const { body } = await request(app)
        .get("/api/comments/quiz/1")
        .expect(200);

      const { comments, totalCount } = body;

      expect(comments).toHaveLength(10);
      expect(totalCount).toBe(10);
    });
    it("200: should respond with the correct amount of comments when passed a limit ", async () => {
      const { body } = await request(app)
        .get("/api/comments/quiz/1?limit=5")
        .expect(200);

      const { comments, totalCount } = body;

      expect(comments).toHaveLength(5);
      expect(totalCount).toBe(10);
    });
    it("200: should respond with the correct amount of comments when passed a page", async () => {
      const { body } = await request(app)
        .get("/api/comments/quiz/1?limit=4&p=3")
        .expect(200);

      const { comments, totalCount } = body;

      expect(comments).toHaveLength(2);
      expect(totalCount).toBe(10);
    });
    it("200: should respond with an empty array when passed a page that exceeds the available pages", async () => {
      const { body } = await request(app)
        .get("/api/comments/quiz/1?limit=5&p=3")
        .expect(200);

      const { comments, totalCount } = body;

      expect(totalCount).toBe(10);
      expect(comments).toBeInstanceOf(Array);
      expect(comments).toHaveLength(0);
    });
    it("400: should respond with a msg if passed an invalid limit ", async () => {
      const {
        body: { msg },
      } = await request(app)
        .get("/api/comments/quiz/1?limit=five&p=1")
        .expect(400);

      expect(msg).toBe("Invalid limit query specified");
    });
    it("400: should respond with a msg if passed an invalid page", async () => {
      const {
        body: { msg },
      } = await request(app)
        .get("/api/comments/quiz/1?limit=5&p=first")
        .expect(400);

      expect(msg).toBe("Invalid page query specified");
    });
  });
});

function testProtectedEndpoint(endpoint: string, method: string) {
  const request = require("supertest");
  it("401: should respond with a msg of Unauthorized if the JWT access token is invalid", async () => {
    const invalidToken = "helloWorld";

    const {
      body: { msg },
    } = await request(app)
      [method](endpoint)
      .set("Authorization", `Bearer ${invalidToken}`)
      .expect(401);

    expect(msg).toBe("Unauthorized");
  });
  it("401: should respond a msg of Unauthorized if the JWT access token is missing", async () => {
    const {
      body: { msg },
    } = await request(app)
      [method](endpoint)
      .set("Authorization", "Bearer")
      .expect(401);

    expect(msg).toBe("Unauthorized");
  });
  it("401: should respond with a msg of Unauthorized if the JWT access token has expired", async () => {
    const expiredAccessToken = jwt.sign(
      { id: 2 },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1ms",
      }
    );

    const {
      body: { msg },
    } = await request(app)
      [method](endpoint)
      .set("Authorization", `Bearer ${expiredAccessToken}`)
      .expect(401);

    expect(msg).toBe("Unauthorized");
  });
}

describe("POST /api/quizzes", () => {
  testProtectedEndpoint("/api/quizzes", "post");
  it("201: should respond with the newly created quiz object", async () => {
    const questionsAndAnswersResponse = [
      {
        question_id: 81,
        quiz_id: 11,
        question_text: "Which city is known as the 'Eternal City'?",
        answers: [
          { answer_id: 321, answer_text: "Rome", is_correct: true },
          { answer_id: 322, answer_text: "Paris", is_correct: false },
          { answer_id: 323, answer_text: "Athens", is_correct: false },
          { answer_id: 324, answer_text: "Cairo", is_correct: false },
        ],
      },
      {
        question_id: 82,
        quiz_id: 11,
        question_text: "What is the largest island in the Mediterranean Sea?",
        answers: [
          { answer_id: 325, answer_text: "Sicily", is_correct: true },
          { answer_id: 326, answer_text: "Crete", is_correct: false },
          { answer_id: 327, answer_text: "Corsica", is_correct: false },
          { answer_id: 328, answer_text: "Malta", is_correct: false },
        ],
      },
      {
        question_id: 83,
        quiz_id: 11,
        question_text: "In which country can you visit the Acropolis?",
        answers: [
          { answer_id: 329, answer_text: "Greece", is_correct: true },
          { answer_id: 330, answer_text: "Italy", is_correct: false },
          { answer_id: 331, answer_text: "Spain", is_correct: false },
          { answer_id: 332, answer_text: "Turkey", is_correct: false },
        ],
      },
      {
        question_id: 84,
        quiz_id: 11,
        question_text: "Which country is famous for the Great Barrier Reef?",
        answers: [
          { answer_id: 333, answer_text: "Australia", is_correct: true },
          { answer_id: 334, answer_text: "Mexico", is_correct: false },
          { answer_id: 335, answer_text: "Thailand", is_correct: false },
          { answer_id: 336, answer_text: "Brazil", is_correct: false },
        ],
      },
      {
        question_id: 85,
        quiz_id: 11,
        question_text: "What is the capital city of Canada?",
        answers: [
          { answer_id: 337, answer_text: "Ottawa", is_correct: true },
          { answer_id: 338, answer_text: "Toronto", is_correct: false },
          { answer_id: 339, answer_text: "Montreal", is_correct: false },
          { answer_id: 340, answer_text: "Vancouver", is_correct: false },
        ],
      },
      {
        question_id: 86,
        quiz_id: 11,
        question_text: "Which city is known for its famous Golden Gate Bridge?",
        answers: [
          { answer_id: 341, answer_text: "San Francisco", is_correct: true },
          { answer_id: 342, answer_text: "New York City", is_correct: false },
          { answer_id: 343, answer_text: "Los Angeles", is_correct: false },
          { answer_id: 344, answer_text: "Seattle", is_correct: false },
        ],
      },
      {
        question_id: 87,
        quiz_id: 11,
        question_text: "What is the official language of Switzerland?",
        answers: [
          { answer_id: 345, answer_text: "German", is_correct: true },
          { answer_id: 346, answer_text: "French", is_correct: false },
          { answer_id: 347, answer_text: "Italian", is_correct: false },
          { answer_id: 348, answer_text: "Romansh", is_correct: false },
        ],
      },
      {
        question_id: 88,
        quiz_id: 11,
        question_text: "Which continent is the largest in terms of land area?",
        answers: [
          { answer_id: 349, answer_text: "Asia", is_correct: true },
          { answer_id: 350, answer_text: "Africa", is_correct: false },
          { answer_id: 351, answer_text: "North America", is_correct: false },
          { answer_id: 352, answer_text: "South America", is_correct: false },
        ],
      },
    ];

    const newQuizResponse = {
      quiz_id: 11,
      quiz_name: "Travel Destinations Trivia",
      category: "Travel",
      user_id: 3,
      username: "Mark@healthcareclinic.com",
      release_date: expect.any(String),
      description:
        "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
      quiz_img:
        "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likes: 0,
      comment_count: 0,
      questions: [...questionsAndAnswersResponse],
    };

    const questionsAndAnswersRequest = [
      {
        question_text: "Which city is known as the 'Eternal City'?",
        answers: [
          { answer_text: "Rome", is_correct: true },
          { answer_text: "Paris", is_correct: false },
          { answer_text: "Athens", is_correct: false },
          { answer_text: "Cairo", is_correct: false },
        ],
      },
      {
        question_text: "What is the largest island in the Mediterranean Sea?",
        answers: [
          { answer_text: "Sicily", is_correct: true },
          { answer_text: "Crete", is_correct: false },
          { answer_text: "Corsica", is_correct: false },
          { answer_text: "Malta", is_correct: false },
        ],
      },
      {
        question_text: "In which country can you visit the Acropolis?",
        answers: [
          { answer_text: "Greece", is_correct: true },
          { answer_text: "Italy", is_correct: false },
          { answer_text: "Spain", is_correct: false },
          { answer_text: "Turkey", is_correct: false },
        ],
      },
      {
        question_text: "Which country is famous for the Great Barrier Reef?",
        answers: [
          { answer_text: "Australia", is_correct: true },
          { answer_text: "Mexico", is_correct: false },
          { answer_text: "Thailand", is_correct: false },
          { answer_text: "Brazil", is_correct: false },
        ],
      },
      {
        question_text: "What is the capital city of Canada?",
        answers: [
          { answer_text: "Ottawa", is_correct: true },
          { answer_text: "Toronto", is_correct: false },
          { answer_text: "Montreal", is_correct: false },
          { answer_text: "Vancouver", is_correct: false },
        ],
      },
      {
        question_text: "Which city is known for its famous Golden Gate Bridge?",
        answers: [
          { answer_text: "San Francisco", is_correct: true },
          { answer_text: "New York City", is_correct: false },
          { answer_text: "Los Angeles", is_correct: false },
          { answer_text: "Seattle", is_correct: false },
        ],
      },
      {
        question_text: "What is the official language of Switzerland?",
        answers: [
          { answer_text: "German", is_correct: true },
          { answer_text: "French", is_correct: false },
          { answer_text: "Italian", is_correct: false },
          { answer_text: "Romansh", is_correct: false },
        ],
      },
      {
        question_text: "Which continent is the largest in terms of land area?",
        answers: [
          { answer_text: "Asia", is_correct: true },
          { answer_text: "Africa", is_correct: false },
          { answer_text: "North America", is_correct: false },
          { answer_text: "South America", is_correct: false },
        ],
      },
    ];

    const newQuiz = {
      quiz_name: "Travel Destinations Trivia",
      category: "Travel",
      description:
        "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
      quiz_img:
        "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      questions: [...questionsAndAnswersRequest],
    };

    const { body } = await request(app)
      .post("/api/quizzes")
      .set("Authorization", `Bearer ${quizPostToken}`)
      .send(newQuiz)
      .expect(201);

    const { addedQuiz } = body;
    expect(addedQuiz).toEqual(newQuizResponse);
  });
  it("400: should respond with a msg if passed a quiz missing a required property", async () => {
    const questionsAndAnswersRequest = [
      {
        question_text: "Which city is known as the 'Eternal City'?",
        answers: [
          { answer_text: "Rome", is_correct: true },
          { answer_text: "Paris", is_correct: false },
          { answer_text: "Athens", is_correct: false },
          { answer_text: "Cairo", is_correct: false },
        ],
      },
      {
        question_text: "What is the largest island in the Mediterranean Sea?",
        answers: [
          { answer_text: "Sicily", is_correct: true },
          { answer_text: "Crete", is_correct: false },
          { answer_text: "Corsica", is_correct: false },
          { answer_text: "Malta", is_correct: false },
        ],
      },
      {
        question_text: "In which country can you visit the Acropolis?",
        answers: [
          { answer_text: "Greece", is_correct: true },
          { answer_text: "Italy", is_correct: false },
          { answer_text: "Spain", is_correct: false },
          { answer_text: "Turkey", is_correct: false },
        ],
      },
      {
        question_text: "Which country is famous for the Great Barrier Reef?",
        answers: [
          { answer_text: "Australia", is_correct: true },
          { answer_text: "Mexico", is_correct: false },
          { answer_text: "Thailand", is_correct: false },
          { answer_text: "Brazil", is_correct: false },
        ],
      },
      {
        question_text: "What is the capital city of Canada?",
        answers: [
          { answer_text: "Ottawa", is_correct: true },
          { answer_text: "Toronto", is_correct: false },
          { answer_text: "Montreal", is_correct: false },
          { answer_text: "Vancouver", is_correct: false },
        ],
      },
      {
        question_text: "Which city is known for its famous Golden Gate Bridge?",
        answers: [
          { answer_text: "San Francisco", is_correct: true },
          { answer_text: "New York City", is_correct: false },
          { answer_text: "Los Angeles", is_correct: false },
          { answer_text: "Seattle", is_correct: false },
        ],
      },
      {
        question_text: "What is the official language of Switzerland?",
        answers: [
          { answer_text: "German", is_correct: true },
          { answer_text: "French", is_correct: false },
          { answer_text: "Italian", is_correct: false },
          { answer_text: "Romansh", is_correct: false },
        ],
      },
      {
        question_text: "Which continent is the largest in terms of land area?",
        answers: [
          { answer_text: "Asia", is_correct: true },
          { answer_text: "Africa", is_correct: false },
          { answer_text: "North America", is_correct: false },
          { answer_text: "South America", is_correct: false },
        ],
      },
    ];

    const newQuiz = {
      quiz_name: "Travel Destinations Trivia",
      description:
        "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
      quiz_img:
        "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      questions: [...questionsAndAnswersRequest],
    };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/quizzes")
      .set("Authorization", `Bearer ${quizPostToken}`)
      .send(newQuiz)
      .expect(400);

    expect(msg).toBe("category is required");
  });
  it("400: should respond with a msg if passed a quiz that has less than 8 questions", async () => {
    const questionsAndAnswersRequest = [
      {
        question_text: "Which city is known as the 'Eternal City'?",
        answers: [
          { answer_text: "Rome", is_correct: true },
          { answer_text: "Paris", is_correct: false },
          { answer_text: "Athens", is_correct: false },
          { answer_text: "Cairo", is_correct: false },
        ],
      },
      {
        question_text: "What is the largest island in the Mediterranean Sea?",
        answers: [
          { answer_text: "Sicily", is_correct: true },
          { answer_text: "Crete", is_correct: false },
          { answer_text: "Corsica", is_correct: false },
          { answer_text: "Malta", is_correct: false },
        ],
      },
      {
        question_text: "In which country can you visit the Acropolis?",
        answers: [
          { answer_text: "Greece", is_correct: true },
          { answer_text: "Italy", is_correct: false },
          { answer_text: "Spain", is_correct: false },
          { answer_text: "Turkey", is_correct: false },
        ],
      },
      {
        question_text: "Which country is famous for the Great Barrier Reef?",
        answers: [
          { answer_text: "Australia", is_correct: true },
          { answer_text: "Mexico", is_correct: false },
          { answer_text: "Thailand", is_correct: false },
          { answer_text: "Brazil", is_correct: false },
        ],
      },
      {
        question_text: "What is the capital city of Canada?",
        answers: [
          { answer_text: "Ottawa", is_correct: true },
          { answer_text: "Toronto", is_correct: false },
          { answer_text: "Montreal", is_correct: false },
          { answer_text: "Vancouver", is_correct: false },
        ],
      },
    ];

    const newQuiz = {
      quiz_name: "Travel Destinations Trivia",
      category: "Travel",
      description:
        "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
      quiz_img:
        "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      questions: [...questionsAndAnswersRequest],
    };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/quizzes")
      .set("Authorization", `Bearer ${quizPostToken}`)
      .send(newQuiz)
      .expect(400);

    expect(msg).toBe("Quiz must have at least 8 questions");
  });
  it("400: should should respond with a msg if passed an empty quiz object", async () => {
    const {
      body: { msg },
    } = await request(app)
      .post("/api/quizzes")
      .set("Authorization", `Bearer ${quizPostToken}`)
      .send({})
      .expect(400);

    expect(msg).toBe("Empty quiz object");
  });
  it("400: should respond with a msg if passed an incorrect number of answers for a question", async () => {
    const questionsAndAnswersRequest = [
      {
        question_text: "Which city is known as the 'Eternal City'?",
        answers: [
          { answer_text: "Rome", is_correct: true },
          { answer_text: "Paris", is_correct: false },
          { answer_text: "Athens", is_correct: false },
        ],
      },
      {
        question_text: "What is the largest island in the Mediterranean Sea?",
        answers: [
          { answer_text: "Sicily", is_correct: true },
          { answer_text: "Crete", is_correct: false },
        ],
      },
      {
        question_text: "In which country can you visit the Acropolis?",
        answers: [
          { answer_text: "Greece", is_correct: true },
          { answer_text: "Italy", is_correct: false },
          { answer_text: "Spain", is_correct: false },
          { answer_text: "Turkey", is_correct: false },
        ],
      },
      {
        question_text: "Which country is famous for the Great Barrier Reef?",
        answers: [
          { answer_text: "Australia", is_correct: true },
          { answer_text: "Mexico", is_correct: false },
          { answer_text: "Thailand", is_correct: false },
          { answer_text: "Brazil", is_correct: false },
        ],
      },
      {
        question_text: "What is the capital city of Canada?",
        answers: [
          { answer_text: "Ottawa", is_correct: true },
          { answer_text: "Toronto", is_correct: false },
          { answer_text: "Montreal", is_correct: false },
          { answer_text: "Vancouver", is_correct: false },
        ],
      },
      {
        question_text: "Which city is known for its famous Golden Gate Bridge?",
        answers: [
          { answer_text: "San Francisco", is_correct: true },
          { answer_text: "New York City", is_correct: false },
          { answer_text: "Los Angeles", is_correct: false },
          { answer_text: "Seattle", is_correct: false },
        ],
      },
      {
        question_text: "What is the official language of Switzerland?",
        answers: [
          { answer_text: "German", is_correct: true },
          { answer_text: "French", is_correct: false },
        ],
      },
      {
        question_text: "Which continent is the largest in terms of land area?",
        answers: [
          { answer_text: "Asia", is_correct: true },
          { answer_text: "Africa", is_correct: false },
          { answer_text: "North America", is_correct: false },
          { answer_text: "South America", is_correct: false },
        ],
      },
    ];

    const newQuiz = {
      quiz_name: "Travel Destinations Trivia",
      category: "Travel",
      description:
        "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
      quiz_img:
        "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      questions: [...questionsAndAnswersRequest],
    };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/quizzes")
      .set("Authorization", `Bearer ${quizPostToken}`)
      .send(newQuiz)
      .expect(400);

    expect(msg).toBe("Each question must have 4 answer options");
  });
  it("400: should respond with a msg if passed a question that has more than one correct answer", async () => {
    const questionsAndAnswersRequest = [
      {
        question_text: "Which city is known as the 'Eternal City'?",
        answers: [
          { answer_text: "Rome", is_correct: true },
          { answer_text: "Paris", is_correct: false },
          { answer_text: "Athens", is_correct: false },
          { answer_text: "Cairo", is_correct: false },
        ],
      },
      {
        question_text: "What is the largest island in the Mediterranean Sea?",
        answers: [
          { answer_text: "Sicily", is_correct: true },
          { answer_text: "Crete", is_correct: false },
          { answer_text: "Corsica", is_correct: false },
          { answer_text: "Malta", is_correct: false },
        ],
      },
      {
        question_text: "In which country can you visit the Acropolis?",
        answers: [
          { answer_text: "Greece", is_correct: true },
          { answer_text: "Italy", is_correct: false },
          { answer_text: "Spain", is_correct: true },
          { answer_text: "Turkey", is_correct: false },
        ],
      },
      {
        question_text: "Which country is famous for the Great Barrier Reef?",
        answers: [
          { answer_text: "Australia", is_correct: true },
          { answer_text: "Mexico", is_correct: false },
          { answer_text: "Thailand", is_correct: false },
          { answer_text: "Brazil", is_correct: false },
        ],
      },
      {
        question_text: "What is the capital city of Canada?",
        answers: [
          { answer_text: "Ottawa", is_correct: true },
          { answer_text: "Toronto", is_correct: false },
          { answer_text: "Montreal", is_correct: true },
          { answer_text: "Vancouver", is_correct: false },
        ],
      },
      {
        question_text: "Which city is known for its famous Golden Gate Bridge?",
        answers: [
          { answer_text: "San Francisco", is_correct: true },
          { answer_text: "New York City", is_correct: false },
          { answer_text: "Los Angeles", is_correct: false },
          { answer_text: "Seattle", is_correct: false },
        ],
      },
      {
        question_text: "What is the official language of Switzerland?",
        answers: [
          { answer_text: "German", is_correct: true },
          { answer_text: "French", is_correct: false },
          { answer_text: "Italian", is_correct: false },
          { answer_text: "Romansh", is_correct: false },
        ],
      },
      {
        question_text: "Which continent is the largest in terms of land area?",
        answers: [
          { answer_text: "Asia", is_correct: true },
          { answer_text: "Africa", is_correct: false },
          { answer_text: "North America", is_correct: false },
          { answer_text: "South America", is_correct: false },
        ],
      },
    ];

    const newQuiz = {
      quiz_name: "Travel Destinations Trivia",
      category: "Travel",
      description:
        "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
      quiz_img:
        "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      questions: [...questionsAndAnswersRequest],
    };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/quizzes")
      .set("Authorization", `Bearer ${quizPostToken}`)
      .send(newQuiz)
      .expect(400);

    expect(msg).toBe("Each question can have only one correct answer");
  });
  it("400: should repsond with a msg if passed a question that has no correct answer", async () => {
    const questionsAndAnswersRequest = [
      {
        question_text: "Which city is known as the 'Eternal City'?",
        answers: [
          { answer_text: "Rome", is_correct: false },
          { answer_text: "Paris", is_correct: false },
          { answer_text: "Athens", is_correct: false },
          { answer_text: "Cairo", is_correct: false },
        ],
      },
      {
        question_text: "What is the largest island in the Mediterranean Sea?",
        answers: [
          { answer_text: "Sicily", is_correct: true },
          { answer_text: "Crete", is_correct: false },
          { answer_text: "Corsica", is_correct: false },
          { answer_text: "Malta", is_correct: false },
        ],
      },
      {
        question_text: "In which country can you visit the Acropolis?",
        answers: [
          { answer_text: "Greece", is_correct: false },
          { answer_text: "Italy", is_correct: false },
          { answer_text: "Spain", is_correct: false },
          { answer_text: "Turkey", is_correct: false },
        ],
      },
      {
        question_text: "Which country is famous for the Great Barrier Reef?",
        answers: [
          { answer_text: "Australia", is_correct: false },
          { answer_text: "Mexico", is_correct: false },
          { answer_text: "Thailand", is_correct: false },
          { answer_text: "Brazil", is_correct: false },
        ],
      },
      {
        question_text: "What is the capital city of Canada?",
        answers: [
          { answer_text: "Ottawa", is_correct: true },
          { answer_text: "Toronto", is_correct: false },
          { answer_text: "Montreal", is_correct: false },
          { answer_text: "Vancouver", is_correct: false },
        ],
      },
      {
        question_text: "Which city is known for its famous Golden Gate Bridge?",
        answers: [
          { answer_text: "San Francisco", is_correct: true },
          { answer_text: "New York City", is_correct: false },
          { answer_text: "Los Angeles", is_correct: false },
          { answer_text: "Seattle", is_correct: false },
        ],
      },
      {
        question_text: "What is the official language of Switzerland?",
        answers: [
          { answer_text: "German", is_correct: true },
          { answer_text: "French", is_correct: false },
          { answer_text: "Italian", is_correct: false },
          { answer_text: "Romansh", is_correct: false },
        ],
      },
      {
        question_text: "Which continent is the largest in terms of land area?",
        answers: [
          { answer_text: "Asia", is_correct: true },
          { answer_text: "Africa", is_correct: false },
          { answer_text: "North America", is_correct: false },
          { answer_text: "South America", is_correct: false },
        ],
      },
    ];

    const newQuiz = {
      quiz_name: "Travel Destinations Trivia",
      category: "Travel",
      description:
        "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
      quiz_img:
        "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      questions: [...questionsAndAnswersRequest],
    };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/quizzes")
      .set("Authorization", `Bearer ${quizPostToken}`)
      .send(newQuiz)
      .expect(400);

    expect(msg).toBe("Each question must have exactly one correct answer");
  });
  it("403: should respond with a msg if the user is not a healthcare professional", async () => {
    const questionsAndAnswersRequest = [
      {
        question_text: "Which city is known as the 'Eternal City'?",
        answers: [
          { answer_text: "Rome", is_correct: true },
          { answer_text: "Paris", is_correct: false },
          { answer_text: "Athens", is_correct: false },
          { answer_text: "Cairo", is_correct: false },
        ],
      },
      {
        question_text: "What is the largest island in the Mediterranean Sea?",
        answers: [
          { answer_text: "Sicily", is_correct: true },
          { answer_text: "Crete", is_correct: false },
          { answer_text: "Corsica", is_correct: false },
          { answer_text: "Malta", is_correct: false },
        ],
      },
      {
        question_text: "In which country can you visit the Acropolis?",
        answers: [
          { answer_text: "Greece", is_correct: true },
          { answer_text: "Italy", is_correct: false },
          { answer_text: "Spain", is_correct: false },
          { answer_text: "Turkey", is_correct: false },
        ],
      },
      {
        question_text: "Which country is famous for the Great Barrier Reef?",
        answers: [
          { answer_text: "Australia", is_correct: true },
          { answer_text: "Mexico", is_correct: false },
          { answer_text: "Thailand", is_correct: false },
          { answer_text: "Brazil", is_correct: false },
        ],
      },
      {
        question_text: "What is the capital city of Canada?",
        answers: [
          { answer_text: "Ottawa", is_correct: true },
          { answer_text: "Toronto", is_correct: false },
          { answer_text: "Montreal", is_correct: false },
          { answer_text: "Vancouver", is_correct: false },
        ],
      },
      {
        question_text: "Which city is known for its famous Golden Gate Bridge?",
        answers: [
          { answer_text: "San Francisco", is_correct: true },
          { answer_text: "New York City", is_correct: false },
          { answer_text: "Los Angeles", is_correct: false },
          { answer_text: "Seattle", is_correct: false },
        ],
      },
      {
        question_text: "What is the official language of Switzerland?",
        answers: [
          { answer_text: "German", is_correct: true },
          { answer_text: "French", is_correct: false },
          { answer_text: "Italian", is_correct: false },
          { answer_text: "Romansh", is_correct: false },
        ],
      },
      {
        question_text: "Which continent is the largest in terms of land area?",
        answers: [
          { answer_text: "Asia", is_correct: true },
          { answer_text: "Africa", is_correct: false },
          { answer_text: "North America", is_correct: false },
          { answer_text: "South America", is_correct: false },
        ],
      },
    ];

    const newQuiz = {
      quiz_name: "Travel Destinations Trivia",
      category: "Travel",
      description:
        "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
      quiz_img:
        "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      questions: [...questionsAndAnswersRequest],
    };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/quizzes")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(newQuiz)
      .expect(403);

    expect(msg).toBe(
      "Only healthcare professionals are allowed to post quizzes"
    );
  });
  it("404: should should respond with a msg if passed a non existent category", async () => {
    const questionsAndAnswersRequest = [
      {
        question_text: "Which city is known as the 'Eternal City'?",
        answers: [
          { answer_text: "Rome", is_correct: true },
          { answer_text: "Paris", is_correct: false },
          { answer_text: "Athens", is_correct: false },
          { answer_text: "Cairo", is_correct: false },
        ],
      },
      {
        question_text: "What is the largest island in the Mediterranean Sea?",
        answers: [
          { answer_text: "Sicily", is_correct: true },
          { answer_text: "Crete", is_correct: false },
          { answer_text: "Corsica", is_correct: false },
          { answer_text: "Malta", is_correct: false },
        ],
      },
      {
        question_text: "In which country can you visit the Acropolis?",
        answers: [
          { answer_text: "Greece", is_correct: true },
          { answer_text: "Italy", is_correct: false },
          { answer_text: "Spain", is_correct: false },
          { answer_text: "Turkey", is_correct: false },
        ],
      },
      {
        question_text: "Which country is famous for the Great Barrier Reef?",
        answers: [
          { answer_text: "Australia", is_correct: true },
          { answer_text: "Mexico", is_correct: false },
          { answer_text: "Thailand", is_correct: false },
          { answer_text: "Brazil", is_correct: false },
        ],
      },
      {
        question_text: "What is the capital city of Canada?",
        answers: [
          { answer_text: "Ottawa", is_correct: true },
          { answer_text: "Toronto", is_correct: false },
          { answer_text: "Montreal", is_correct: false },
          { answer_text: "Vancouver", is_correct: false },
        ],
      },
      {
        question_text: "Which city is known for its famous Golden Gate Bridge?",
        answers: [
          { answer_text: "San Francisco", is_correct: true },
          { answer_text: "New York City", is_correct: false },
          { answer_text: "Los Angeles", is_correct: false },
          { answer_text: "Seattle", is_correct: false },
        ],
      },
      {
        question_text: "What is the official language of Switzerland?",
        answers: [
          { answer_text: "German", is_correct: true },
          { answer_text: "French", is_correct: false },
          { answer_text: "Italian", is_correct: false },
          { answer_text: "Romansh", is_correct: false },
        ],
      },
      {
        question_text: "Which continent is the largest in terms of land area?",
        answers: [
          { answer_text: "Asia", is_correct: true },
          { answer_text: "Africa", is_correct: false },
          { answer_text: "North America", is_correct: false },
          { answer_text: "South America", is_correct: false },
        ],
      },
    ];

    const newQuiz = {
      quiz_name: "Travel Destinations Trivia",
      category: "Food",
      description:
        "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
      quiz_img:
        "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      questions: [...questionsAndAnswersRequest],
    };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/quizzes")
      .set("Authorization", `Bearer ${quizPostToken}`)
      .send(newQuiz)
      .expect(404);

    expect(msg).toBe("Category not found");
  });
});

describe("POST /api/comments/quiz/:quiz_id", () => {
  testProtectedEndpoint("/api/comments/quiz/6", "post");
  it("201: should respond with the newly created comment", async () => {
    const newComment = {
      comment_text: "Great quiz!",
    };

    const { body } = await request(app)
      .post("/api/comments/quiz/6")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(newComment)
      .expect(201);

    const { comment } = body;
    expect(comment).toEqual({
      comment_id: 16,
      quiz_id: 6,
      created_at: expect.any(String),
      comment_text: "Great quiz!",
      username: "Alex456",
      user_id: 2,
      likes: 0,
    });
  });
  it("400: should respond with a msg if passed an invalid quiz_id", async () => {
    const newComment = {
      comment_text: "Great quiz!",
    };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/comments/quiz/five")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(newComment)
      .expect(400);

    expect(msg).toBe("Invalid quiz_id specified");
  });
  it("400: should respond with a msg if passed the comment missing a required property", async () => {
    const newComment = {
      username: "Alex456",
    };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/comments/quiz/6")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(newComment)
      .expect(400);

    expect(msg).toBe("comment_text is required");
  });
  it("400: should respond with a msg if passed a comment_text that is a empty string", async () => {
    const newComment = {
      comment_text: "",
    };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/comments/quiz/6")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(newComment)
      .expect(400);

    expect(msg).toBe("comment_text is required");
  });
  it("400: should respond with a msg if passed an empty comment object", async () => {
    const {
      body: { msg },
    } = await request(app)
      .post("/api/comments/quiz/6")
      .set("Authorization", `Bearer ${accessToken}`)
      .send({})
      .expect(400);

    expect(msg).toBe("Empty comment object");
  });
  it("404: should respond with a msg if passed a valid but non existent quiz_id", async () => {
    const newComment = {
      comment_text: "Great quiz!",
    };

    const {
      body: { msg },
    } = await request(app)
      .post("/api/comments/quiz/20")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(newComment)
      .expect(404);

    expect(msg).toBe("quiz_id not found");
  });
});

describe("PATCH /api/quizzes/:quiz_id", () => {
  testProtectedEndpoint("/api/quizzes/2", "patch");
  it("201: should respond with the correct likes value (incremented) if the user has not previously voted", async () => {
    const updatedLikes = {
      inc_likes: true,
    };

    const { body } = await request(app)
      .patch("/api/quizzes/2")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(201);

    const { quiz } = body;
    expect(quiz).toMatchObject({
      likes: 1,
    });
  });
  it("201: should respond with the correct likes value (reduced) if the user has not previously voted", async () => {
    const updatedLikes = {
      inc_likes: false,
    };

    const { body } = await request(app)
      .patch("/api/quizzes/2")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(201);

    const { quiz } = body;
    expect(quiz).toMatchObject({
      likes: -1,
    });
  });
  it("201: should respond with the correct likes value (reduced) if the user dislikes a quiz they previously liked", async () => {
    const updatedLikes = {
      inc_likes: false,
    };

    const { body } = await request(app)
      .patch("/api/quizzes/1")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(201);

    const { quiz } = body;
    expect(quiz).toMatchObject({
      likes: 1,
    });
  });
  it("201: should respond with the correct likes value (incremented) if the user likes a quiz they previously disliked", async () => {
    const updatedLikes = {
      inc_likes: true,
    };

    const { body } = await request(app)
      .patch("/api/quizzes/10")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(201);

    const { quiz } = body;
    expect(quiz).toMatchObject({
      likes: 1,
    });
  });
  it("400: should respond with a msg if passed an invalid quiz_id", async () => {
    const updatedLikes = {
      inc_likes: true,
    };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/quizzes/two")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(400);

    expect(msg).toBe("Invalid quiz_id specified");
  });
  it("400: should respond with a msg if inc_likes is missing", async () => {
    const {
      body: { msg },
    } = await request(app)
      .patch("/api/quizzes/2")
      .set("Authorization", `Bearer ${accessToken}`)
      .send({})
      .expect(400);

    expect(msg).toBe("inc_likes is required");
  });
  it("400: should respond with a msg if inc_likes is an invalid value", async () => {
    const updatedLikes = {
      inc_likes: 5,
    };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/quizzes/2")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(400);

    expect(msg).toBe(
      "Invalid value for specified inc_likes. Expected true or false"
    );
  });
  it("400: should respond with a msg if the user tries to like a quiz they have already liked", async () => {
    const updatedLikes = {
      inc_likes: true,
    };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/quizzes/1")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(400);

    expect(msg).toBe("You have already liked this quiz");
  });
  it("400: should respond with a msg if the user tries to dislike a quiz they have already disliked", async () => {
    const updatedLikes = {
      inc_likes: false,
    };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/quizzes/10")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(400);

    expect(msg).toBe("You have already disliked this quiz");
  });
  it("404: should respond with a msg if passed a valid but non existent quiz_id", async () => {
    const updatedLikes = {
      inc_likes: true,
    };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/quizzes/20")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(404);

    expect(msg).toBe("quiz_id not found");
  });
});

describe("PATCH /api/comments/:comment_id", () => {
  testProtectedEndpoint("/api/comments/2", "patch");
  it("201: should respond with the correct likes value (incremented) if the user has not previously voted", async () => {
    const updatedLikes = {
      inc_likes: true,
    };

    const { body } = await request(app)
      .patch("/api/comments/2")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(201);

    const { comment } = body;
    expect(comment).toEqual({
      likes: 1,
      comment_id: 2,
      quiz_id: 1,
      comment_text:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      user_id: 1,
      username: "Tom123",
      created_at: expect.any(String),
    });
  });
  it("201: should respond with the correct likes value (reduced) if the user has not previously voted", async () => {
    const updatedLikes = {
      inc_likes: false,
    };

    const { body } = await request(app)
      .patch("/api/comments/2")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(201);

    const { comment } = body;
    expect(comment).toMatchObject({
      likes: -1,
    });
  });
  it("201: should respond with the correct likes value (reduced) if the user dislikes a comment they previously liked", async () => {
    const updatedLikes = {
      inc_likes: false,
    };

    const { body } = await request(app)
      .patch("/api/comments/3")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(201);

    const { comment } = body;
    expect(comment).toMatchObject({
      likes: 1,
    });
  });
  it("201: should respond with the correct likes value (incremented) if the user likes a comment they previously disliked", async () => {
    const updatedLikes = {
      inc_likes: true,
    };

    const { body } = await request(app)
      .patch("/api/comments/6")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(201);

    const { comment } = body;
    expect(comment).toMatchObject({
      likes: 1,
    });
  });
  it("400: should respond with a msg if passed an invalid comment_id", async () => {
    const updatedLikes = {
      inc_likes: true,
    };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/comments/ten")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(400);

    expect(msg).toBe("Invalid comment_id specified");
  });
  it("400: should respond with a msg if inc_likes is missing", async () => {
    const {
      body: { msg },
    } = await request(app)
      .patch("/api/comments/ten")
      .set("Authorization", `Bearer ${accessToken}`)
      .send({})
      .expect(400);

    expect(msg).toBe("inc_likes is required");
  });
  it("400: should respond with a msg if inc_likes is an invalid value", async () => {
    const updatedLikes = {
      inc_likes: 5,
    };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/comments/2")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(400);

    expect(msg).toBe(
      "Invalid value for specified inc_likes. Expected true or false"
    );
  });
  it("400: should respond with a msg if the user tries to like a comment they have already liked", async () => {
    const updatedLikes = {
      inc_likes: true,
    };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/comments/3")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(400);

    expect(msg).toBe("You have already liked this comment");
  });
  it("400: should respond with a msg if the user tries to dislike a comment they have already disliked", async () => {
    const updatedLikes = {
      inc_likes: false,
    };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/comments/6")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(400);

    expect(msg).toBe("You have already disliked this comment");
  });
  it("404: should respond with a msg if passed a valid but non existent comment_id", async () => {
    const updatedLikes = {
      inc_likes: true,
    };

    const {
      body: { msg },
    } = await request(app)
      .patch("/api/comments/20")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(404);

    expect(msg).toBe("comment_id not found");
  });
});

describe("DELETE /api/quizzes/:quiz_id", () => {
  testProtectedEndpoint("/api/quizzes/1", "delete");
  it("204: should delete the quiz along with the associated comments, likes, questions and answers", async () => {
    await request(app)
      .delete("/api/quizzes/1")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(204);

    const {
      body: { msg },
    } = await request(app).get("/api/quizzes/1").expect(404);

    expect(msg).toBe("quiz_id not found");

    const commentsRequest = await request(app)
      .get("/api/comments/quiz/1")
      .expect(404);

    expect(commentsRequest.body.msg).toBe("quiz_id not found");

    const questionsQuery = "SELECT * FROM questions WHERE quiz_id = 1";
    const { rows } = await db.query(questionsQuery);

    const answersQuery = `
    SELECT * FROM answers 
    WHERE question_id IN (SELECT question_id FROM questions WHERE quiz_id = 1)
    `;
    const answersResponse = await db.query(answersQuery);

    const commentWithLikes = `
    SELECT * FROM likes WHERE content_id = 3 AND content_type = 'comment';
    `;
    const likeValues = await db.query(commentWithLikes);

    expect(rows).toBeInstanceOf(Array);
    expect(rows).toHaveLength(0);

    expect(answersResponse.rows).toBeInstanceOf(Array);
    expect(answersResponse.rows).toHaveLength(0);

    expect(likeValues.rows).toBeInstanceOf(Array);
    expect(likeValues.rows).toHaveLength(0);
  });
  it("400: should respond with a msg if passed an invalid quiz_id", async () => {
    const {
      body: { msg },
    } = await request(app)
      .delete("/api/quizzes/two")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(400);

    expect(msg).toBe("Invalid quiz_id specified");
  });
  it("403: should respond with a msg if the user tries to delete a quiz they did not post", async () => {
    const {
      body: { msg },
    } = await request(app)
      .delete("/api/quizzes/2")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(403);

    expect(msg).toBe("You are not authorized to delete this quiz");
  });
  it("404: should respond with a msg if passed a valid but non existent quiz_id", async () => {
    const {
      body: { msg },
    } = await request(app)
      .delete("/api/quizzes/20")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(404);

    expect(msg).toBe("quiz_id not found");
  });
});

describe("DELETE /api/comments/:comment_id", () => {
  testProtectedEndpoint("/api/comments/11", "delete");
  it("204: should delete the comment specified along with the associated likes", async () => {
    await request(app)
      .delete("/api/comments/11")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(204);

    const updatedLikes = {
      inc_likes: false,
    };

    const patchCommentRequest = await request(app)
      .patch("/api/comments/11")
      .set("Authorization", `Bearer ${accessToken}`)
      .send(updatedLikes)
      .expect(404);

    expect(patchCommentRequest.body.msg).toBe("comment_id not found");

    const likesQuery = `
    SELECT * FROM likes WHERE content_id = 11 AND content_type = 'comment';
    `;
    const { rows } = await db.query(likesQuery);

    expect(rows).toBeInstanceOf(Array);
    expect(rows).toHaveLength(0);
  });
  it("400: should respond with a msg if passed an invalid comment_id", async () => {
    const {
      body: { msg },
    } = await request(app)
      .delete("/api/comments/ten")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(400);

    expect(msg).toBe("Invalid comment_id specified");
  });
  it("403: should respond with a msg if the user tries to delete a comment they did not post", async () => {
    const {
      body: { msg },
    } = await request(app)
      .delete("/api/comments/1")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(403);

    expect(msg).toBe("You are not authorized to delete this comment");
  });
  it("404: should respond with a msg if passed a valid but non existent comment_id", async () => {
    const {
      body: { msg },
    } = await request(app)
      .delete("/api/comments/50")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(404);

    expect(msg).toBe("comment_id not found");
  });
});

describe("GET /api/quizzes/:quiz_id/user/likes", () => {
  testProtectedEndpoint("/api/quizzes/:quiz_id/user/likes", "get");
  it("200: should respond with a status of true if the user has liked the quiz", async () => {
    const { body } = await request(app)
      .get("/api/quizzes/1/user/likes")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(200);

    const { likedStatus } = body;
    expect(likedStatus).toEqual({ hasLiked: true });
  });
  it("200: should respond with a status of false if the user has disliked the quiz", async () => {
    const { body } = await request(app)
      .get("/api/quizzes/7/user/likes")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(200);

    const { likedStatus } = body;
    expect(likedStatus).toEqual({ hasLiked: false });
  });
  it("200: should respond with a status of null if the user has not voted on the quiz", async () => {
    const { body } = await request(app)
      .get("/api/quizzes/2/user/likes")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(200);

    const { likedStatus } = body;
    expect(likedStatus).toEqual({ hasLiked: null });
  });
  it("400: should respond with a msg if passed an invalid quiz_id", async () => {
    const {
      body: { msg },
    } = await request(app)
      .get("/api/quizzes/one/user/likes")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(400);

    expect(msg).toBe("Invalid quiz_id specified");
  });
  it("404: should respond with a msg if passed a valid but non existent quiz_id", async () => {
    const {
      body: { msg },
    } = await request(app)
      .get("/api/quizzes/20/user/likes")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(404);

    expect(msg).toBe("quiz_id not found");
  });
});

describe("GET /api/comments/quiz/:quiz_id/user/likes", () => {
  testProtectedEndpoint("/api/comments/quiz/1/user/likes", "get");
  it("200: should respond with a vote array of the users votes on the comments for the quiz_id", async () => {
    const { body } = await request(app)
      .get("/api/comments/quiz/1/user/likes")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(200);

    const statusResponse = {
      quiz_id: 1,
      votes: [
        {
          comment_id: 1,
          hasLiked: null,
        },
        {
          comment_id: 2,
          hasLiked: null,
        },
        {
          comment_id: 3,
          hasLiked: true,
        },
        {
          comment_id: 4,
          hasLiked: null,
        },
        {
          comment_id: 5,
          hasLiked: null,
        },
        {
          comment_id: 6,
          hasLiked: false,
        },
        {
          comment_id: 7,
          hasLiked: null,
        },
        {
          comment_id: 8,
          hasLiked: null,
        },
        {
          comment_id: 9,
          hasLiked: true,
        },
        {
          comment_id: 10,
          hasLiked: null,
        },
      ],
    };
    const { likedStatus } = body;
    expect(likedStatus).toEqual(statusResponse);
  });
  it("200: should respond with an empty votes array if quiz_id has no comments", async () => {
    const { body } = await request(app)
      .get("/api/comments/quiz/2/user/likes")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(200);

    const statusResponse = { quiz_id: 2, votes: [] };

    const { likedStatus } = body;
    expect(likedStatus).toEqual(statusResponse);
  });
  it("400: should respond with a msg if passed an invalid quiz_id", async () => {
    const {
      body: { msg },
    } = await request(app)
      .get("/api/comments/quiz/five/user/likes")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(400);

    expect(msg).toBe("Invalid quiz_id specified");
  });
  it("404: should respond with a msg if passed a valid but non existent quiz_id", async () => {
    const {
      body: { msg },
    } = await request(app)
      .get("/api/comments/quiz/15/user/likes")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect(404);

    expect(msg).toBe("quiz_id not found");
  });
});

describe("GET /api", () => {
  it("200: should respond with JSON representation of all the available endpoints", async () => {
    const { body } = await request(app).get("/api").expect(200);

    const { apiEndpoints } = body;
    expect(apiEndpoints).toEqual(endpoints);
  });
});
