const endpoints = {
  "GET /api": {
    description:
      "Responds with a JSON object of all the available endpoints of the API, with a description of what it will respond with and an example request and response",
  },
  "POST /api/auth/login": {
    description:
      "Authenticates a user and generates an access token (valid for 15 minutes), requires a username and password in the request body. The response includes an access token and sets a refresh token (valid for 7 days) as an HTTP-only cookie",
    request: {
      body: {
        username: "Alex456",
        password: "Password123",
      },
    },
    response: {
      status: 200,
      headers: {
        "set-cookie": "refreshToken=<refresh_token_value>; HttpOnly",
      },
      body: {
        accessToken: "<access_token_value>",
      },
    },
  },
  "GET /api/auth/protected": {
    description:
      "Protected endpoint that requires a valid JWT access token for authentication, responds with a success message",
    request: {
      headers: {
        Authorization: "Bearer <access_token_value>",
      },
    },
    response: {
      status: 200,
      body: {
        msg: "Authenticated successfully",
      },
    },
  },
  "POST /api/users": {
    description:
      "Creates a new user with requires a username and password. Responds with the newly created user object if successful",
    request: {
      body: {
        newUser: {
          username: "John123",
          password: "Water123",
        },
      },
    },
    response: {
      status: 201,
      body: {
        user: {
          user_id: 3,
          username: "John123",
        },
      },
    },
  },
  "POST /api/auth/refresh-token": {
    description:
      "Generates a new access token using a valid refresh token. Responds with the new access token if successful.",
    request: {
      headers: {
        Cookie: "refreshToken=<refresh_token_value>",
      },
    },
    response: {
      status: 200,
      body: {
        accessToken: "<new_access_token_value>",
      },
    },
  },
  "POST /api/auth/logout": {
    description:
      "Logs out the user, clears the refresh token and sets an expired expiration date.",
    request: {
      headers: {
        Cookie: "refreshToken=<refresh_token_value>",
      },
    },
    responses: {
      status: 200,
      body: {
        msg: "Logout successful",
      },
    },
  },
  "GET /api/categories": {
    description: "Responds with an array of category objects.",
    response: {
      status: 200,
      body: {
        categories: [
          {
            category_id: 1,
            category: "Cancer",
          },
          {
            category_id: 2,
            category: "Diabetes",
          },
          {
            category_id: 3,
            category: "Heart Health",
          },
          {
            category_id: 4,
            category: "Hypertension (High Blood Pressure)",
          },
          {
            category_id: 5,
            category: "Respiratory Conditions (Asthma, COPD)",
          },
          {
            category_id: 6,
            category: "Mental Health",
          },
          {
            category_id: 7,
            category: "Nutrition and Diet",
          },
          {
            category_id: 8,
            category: "Exercise and Physical Activity",
          },
          {
            category_id: 9,
            category: "Sleep and Rest",
          },
          {
            category_id: 10,
            category: "Other",
          },
        ],
      },
    },
  },
  "GET /api/quizzes": {
    description:
      "Responds with an array of quiz objects and a total count of available quizzes with the applied filters. Can be queried with a page value (p) and limit number to implement pagination. The quizzes can be sorted (sort_by) by any valid column and ordered (order_by) in ascending (asc) or descending (desc) order",
    queries: [
      {
        columns: ["quiz_name", "category", "release_date", "likes"],
      },
      {
        name: "category",
        description: "Filter quizzes by category",
        example: "/api/quizzes?category=Heart-Health",
      },
      {
        name: "limit",
        description:
          "Limit the number of quizzes per page (default limit of 10)",
        example: "/api/quizzes?limit=5",
      },
      {
        name: "p",
        description:
          "Specify the page number for pagination (default page of 1)",
        example: "/api/quizzes?p=2",
      },
      {
        name: "sort_by",
        description: "Sort quizzes by a specific column",
        example: "/api/quizzes?sort_by=release_date",
      },
      {
        name: "order_by",
        description: "Specify the order of sorting (asc or desc)",
        example: "/api/quizzes?sort_by=release_date&order_by=asc",
      },
    ],
    request: {
      method: "GET",
      path: "/api/quizzes?category=Heart-Health&limit=1",
    },
    response: {
      status: 200,
      body: {
        quizzes: [
          {
            quiz_id: 7,
            quiz_name: "Heart Health Fundamentals",
            category: "Heart Health",
            quiz_img:
              "https://images.pexels.com/photos/992816/pexels-photo-992816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description:
              "Test your knowledge of heart health and its importance for overall well-being with this informative quiz. From heart anatomy to cardiovascular diseases, this quiz covers essential concepts for a healthy heart.",
            username: "Joe",
            user_id: 2,
            release_date: "2023-08-21 15:33:01.783239",
            likes: 2,
          },
        ],
        totalCount: 2,
      },
    },
  },
  "GET /api/quizzes/:quiz_id": {
    description:
      "Responds with the quiz info and questions for the specified quiz_id",
    request: {
      method: "GET",
      path: "/api/quizzes/4",
    },
    response: {
      status: 200,
      body: {
        quiz: {
          quiz_id: 4,
          quiz_name: "Cardiovascular Fitness Insights",
          description:
            "Test your knowledge of cardiovascular health and fitness with this informative quiz. From heart health to aerobic exercises, this quiz covers essential concepts for a strong cardiovascular system.",
          quiz_img:
            "https://images.pexels.com/photos/176903/pexels-photo-176903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          category: "Exercise and Physical Activity",
          user_id: 1,
          username: "David",
          release_date: "2023-08-21 15:33:01.783239",
          likes: 3,
          comment_count: 5,
          questions: [
            {
              question_id: 25,
              question_text:
                "What is the recommended frequency of moderate-intensity aerobic exercise per week for adults?",
              answers: [
                {
                  answer_id: 97,
                  answer_text: "Four times a week",
                  is_correct: true,
                },
                {
                  answer_id: 98,
                  answer_text: "Once a week",
                  is_correct: false,
                },
                {
                  answer_id: 99,
                  answer_text: "Twice a week",
                  is_correct: false,
                },
                {
                  answer_id: 100,
                  answer_text: "Every day",
                  is_correct: false,
                },
              ],
            },
            {
              question_id: 26,
              question_text:
                "Which type of exercise is most effective for improving cardiovascular health?",
              answers: [
                {
                  answer_id: 101,
                  answer_text: "Strength training",
                  is_correct: false,
                },
                {
                  answer_id: 102,
                  answer_text: "Yoga",
                  is_correct: false,
                },
                {
                  answer_id: 103,
                  answer_text: "Aerobic exercise",
                  is_correct: true,
                },
                {
                  answer_id: 104,
                  answer_text: "Static stretching",
                  is_correct: false,
                },
              ],
            },
            {
              question_id: 27,
              question_text:
                "What is the target heart rate range for moderate-intensity aerobic exercise?",
              answers: [
                {
                  answer_id: 105,
                  answer_text: "70-85% of maximum heart rate",
                  is_correct: false,
                },
                {
                  answer_id: 106,
                  answer_text: "90-100% of maximum heart rate",
                  is_correct: false,
                },
                {
                  answer_id: 107,
                  answer_text: "50-70% of maximum heart rate",
                  is_correct: true,
                },
                {
                  answer_id: 108,
                  answer_text: "10-20% of maximum heart rate",
                  is_correct: false,
                },
              ],
            },
            {
              question_id: 28,
              question_text:
                "Which aerobic exercise involves alternating between short bursts of intense activity and periods of rest?",
              answers: [
                {
                  answer_id: 109,
                  answer_text: "Interval training",
                  is_correct: true,
                },
                {
                  answer_id: 110,
                  answer_text: "Steady-state training",
                  is_correct: false,
                },
                {
                  answer_id: 111,
                  answer_text: "Pilates",
                  is_correct: false,
                },
                {
                  answer_id: 112,
                  answer_text: "Tai Chi",
                  is_correct: false,
                },
              ],
            },
            {
              question_id: 29,
              question_text: "What is the 'talk test' during exercise?",
              answers: [
                {
                  answer_id: 113,
                  answer_text: "Exercising without breaks",
                  is_correct: false,
                },
                {
                  answer_id: 114,
                  answer_text:
                    "Alternating between intense and light exercises",
                  is_correct: false,
                },
                {
                  answer_id: 115,
                  answer_text: "Singing loudly during exercise",
                  is_correct: false,
                },
                {
                  answer_id: 116,
                  answer_text:
                    "Being able to carry on a conversation during exercise",
                  is_correct: true,
                },
              ],
            },
            {
              question_id: 30,
              question_text:
                "What is the primary function of the cardiovascular system?",
              answers: [
                {
                  answer_id: 117,
                  answer_text: "Regulating body temperature",
                  is_correct: false,
                },
                {
                  answer_id: 118,
                  answer_text: "Building muscle mass",
                  is_correct: false,
                },
                {
                  answer_id: 119,
                  answer_text:
                    "Transporting oxygen and nutrients throughout the body",
                  is_correct: true,
                },
                {
                  answer_id: 120,
                  answer_text: "Producing digestive enzymes",
                  is_correct: false,
                },
              ],
            },
            {
              question_id: 31,
              question_text:
                "What is the term for the maximum amount of oxygen your body can use during intense exercise?",
              answers: [
                {
                  answer_id: 121,
                  answer_text: "HR max",
                  is_correct: false,
                },
                {
                  answer_id: 122,
                  answer_text: "BP max",
                  is_correct: false,
                },
                {
                  answer_id: 123,
                  answer_text: "VO2 max",
                  is_correct: true,
                },
                {
                  answer_id: 124,
                  answer_text: "RPE max",
                  is_correct: false,
                },
              ],
            },
            {
              question_id: 32,
              question_text:
                "What is the recommended cool-down period after vigorous aerobic exercise?",
              answers: [
                {
                  answer_id: 125,
                  answer_text: "5-10 minutes",
                  is_correct: true,
                },
                {
                  answer_id: 126,
                  answer_text: "15-30 minutes",
                  is_correct: false,
                },
                {
                  answer_id: 127,
                  answer_text: "1-2 hours",
                  is_correct: false,
                },
                {
                  answer_id: 128,
                  answer_text: "No cool-down is necessary",
                  is_correct: false,
                },
              ],
            },
          ],
        },
      },
    },
  },
  "GET /api/comments/quiz/:quiz_id": {
    description:
      "Responds with an array of comments for the specified quiz_id, ordered by newest first",
    queries: [
      {
        name: "limit",
        description:
          "Limit the number of comments per page (default limit of 10)",
        example: "/api/comments/quiz/2?limit=5",
      },
      {
        name: "p",
        description:
          "Specify the page number for pagination (default page of 1)",
        example: "/api/comments/quiz/2?p=3",
      },
    ],
    request: {
      method: "GET",
      path: "/api/comments/quiz/1",
    },
    response: {
      status: 200,
      body: {
        comments: [
          {
            comment_id: 8,
            quiz_id: 1,
            comment_text:
              "Fusce nec purus ac erat feugiat consequat vitae non elit.",
            username: "David",
            user_id: 1,
            created_at: "2023-08-21 15:33:01.783239",
            likes: 0,
          },
          {
            comment_id: 10,
            quiz_id: 1,
            comment_text:
              "Proin ac magna sit amet nisl bibendum finibus. Aenean eget mauris elit.",
            username: "David",
            user_id: 1,
            created_at: "2023-08-21 15:33:01.783239",
            likes: 0,
          },
          {
            comment_id: 9,
            quiz_id: 1,
            comment_text:
              "Vivamus convallis elit eu massa maximus tincidunt vitae non lectus.",
            username: "Matt",
            user_id: 3,
            created_at: "2023-08-21 15:33:01.783239",
            likes: 3,
          },
          {
            comment_id: 7,
            quiz_id: 1,
            comment_text:
              "Nam maximus ligula eu mauris consectetur, nec consequat nisl sagittis.",
            username: "Matt",
            user_id: 3,
            created_at: "2023-08-21 15:33:01.783239",
            likes: 3,
          },
          {
            comment_id: 1,
            quiz_id: 1,
            comment_text:
              "Donec vitae odio eu elit ullamcorper fringilla nec et ipsum.",
            username: "David",
            user_id: 1,
            created_at: "2023-08-21 15:33:01.783239",
            likes: 3,
          },
          {
            comment_id: 5,
            quiz_id: 1,
            comment_text:
              "Vestibulum fermentum ligula ac volutpat lobortis. Quisque auctor eros ac suscipit consectetur.",
            username: "David",
            user_id: 1,
            created_at: "2023-08-21 15:33:01.783239",
            likes: 3,
          },
          {
            comment_id: 4,
            quiz_id: 1,
            comment_text:
              "Pellentesque vitae sem ut mi ultrices ultricies non a ligula.",
            username: "Joe",
            user_id: 2,
            created_at: "2023-08-21 15:33:01.783239",
            likes: 0,
          },
          {
            comment_id: 2,
            quiz_id: 1,
            comment_text:
              "Etiam tempor orci at tellus vulputate, at rhoncus justo tristique.",
            username: "Joe",
            user_id: 2,
            created_at: "2023-08-21 15:33:01.783239",
            likes: 0,
          },
          {
            comment_id: 6,
            quiz_id: 1,
            comment_text:
              "Nulla at metus suscipit, faucibus nisl at, consectetur metus.",
            username: "David",
            user_id: 1,
            created_at: "2023-08-21 15:33:01.783239",
            likes: 0,
          },
          {
            comment_id: 3,
            quiz_id: 1,
            comment_text:
              "Aliquam erat volutpat. Suspendisse in pharetra nisi, vitae euismod leo.",
            username: "David",
            user_id: 1,
            created_at: "2023-08-21 15:33:01.783239",
            likes: 3,
          },
        ],
        totalCount: 10,
      },
    },
  },
  "POST /api/quizzes": {
    description:
      "Create a new quiz by providing the necessary information. Each quiz should contain 8 to 16 questions, with each question having 4 answer options, of which only one is correct. Please note that this feature is exclusively available for healthcare professionals. To ensure authenticity, only users with valid usernames (ending in @healthcareclinic.com) are granted access to post quizzes.",
    request: {
      headers: {
        Authorization: "Bearer <access_token_value>",
      },
      body: {
        newQuiz: {
          quiz_name: "Active Lifestyle Challenge",
          category: "Exercise and Physical Activity",
          description:
            "Test your knowledge about the importance of exercise and physical activity for overall health and well-being.",
          username: "Mark@healthcareclinic.com",
          quiz_img:
            "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          questions: [
            {
              question_text:
                "What are the recommended guidelines for aerobic exercise per week for adults?",
              answers: [
                { answer_text: "30 minutes per week", is_correct: false },
                { answer_text: "60 minutes per day", is_correct: true },
                { answer_text: "10 minutes per day", is_correct: false },
                { answer_text: "120 minutes per week", is_correct: false },
              ],
            },
            {
              question_text:
                "Which type of exercise focuses on increasing flexibility and range of motion?",
              answers: [
                { answer_text: "Aerobic exercise", is_correct: false },
                { answer_text: "Strength training", is_correct: false },
                { answer_text: "Cardiovascular exercise", is_correct: false },
                { answer_text: "Flexibility training", is_correct: true },
              ],
            },
            {
              question_text:
                "What are the potential benefits of regular physical activity?",
              answers: [
                { answer_text: "Decreased energy levels", is_correct: false },
                {
                  answer_text: "Increased risk of chronic diseases",
                  is_correct: false,
                },
                { answer_text: "Improved mental well-being", is_correct: true },
                { answer_text: "Reduced muscle mass", is_correct: false },
              ],
            },
            {
              question_text:
                "How does exercise contribute to cardiovascular health?",
              answers: [
                {
                  answer_text: "It does not impact cardiovascular health",
                  is_correct: false,
                },
                {
                  answer_text: "It improves lung capacity but not heart health",
                  is_correct: false,
                },
                {
                  answer_text:
                    "It strengthens the heart, improves blood circulation, and lowers the risk of heart diseases",
                  is_correct: true,
                },
                {
                  answer_text: "It only benefits bone health",
                  is_correct: false,
                },
              ],
            },
            {
              question_text:
                "What is the role of strength training in an exercise routine?",
              answers: [
                {
                  answer_text: "Strength training has no significant benefits",
                  is_correct: false,
                },
                {
                  answer_text:
                    "It helps increase muscle strength, metabolism, and bone density",
                  is_correct: true,
                },
                {
                  answer_text: "Strength training only benefits athletes",
                  is_correct: false,
                },
                {
                  answer_text: "It improves cardiovascular endurance",
                  is_correct: false,
                },
              ],
            },
            {
              question_text:
                "What is the recommended duration for cool-down exercises after a workout?",
              answers: [
                { answer_text: "No cool-down is necessary", is_correct: false },
                { answer_text: "5 minutes", is_correct: false },
                { answer_text: "15 minutes", is_correct: false },
                { answer_text: "10-15 minutes", is_correct: true },
              ],
            },
            {
              question_text:
                "How can individuals overcome common barriers to exercise?",
              answers: [
                {
                  answer_text: "Avoid physical activity entirely",
                  is_correct: false,
                },
                {
                  answer_text:
                    "Stay consistent, set achievable goals, find enjoyable activities, and address time constraints",
                  is_correct: true,
                },
                {
                  answer_text: "Push through pain and discomfort",
                  is_correct: false,
                },
                {
                  answer_text: "Exercise only during weekends",
                  is_correct: false,
                },
              ],
            },
            {
              question_text: "Is stretching before exercise recommended?",
              answers: [
                {
                  answer_text: "Yes, it helps prevent injury",
                  is_correct: false,
                },
                {
                  answer_text:
                    "No, it can decrease muscle strength before exercise",
                  is_correct: true,
                },
                {
                  answer_text: "Stretching is only necessary for athletes",
                  is_correct: false,
                },
                {
                  answer_text: "It is recommended only for older adults",
                  is_correct: false,
                },
              ],
            },
          ],
        },
      },
    },
    response: {
      status: 201,
      body: {
        addedQuiz: {
          quiz_id: 21,
          quiz_name: "Active Lifestyle Challenge",
          category: "Exercise and Physical Activity",
          user_id: 3,
          username: "Mark@healthcareclinic.com",
          release_date: "2023-08-21 15:33:01.783239",
          description:
            "Test your knowledge about the importance of exercise and physical activity for overall health and well-being.",
          quiz_img:
            "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          likes: 0,
          comment_count: 0,
          questions: [
            [
              {
                question_id: 161,
                quiz_id: 21,
                question_text:
                  "What are the recommended guidelines for aerobic exercise per week for adults?",
                answers: [
                  {
                    answer_id: 641,
                    answer_text: "30 minutes per week",
                    is_correct: false,
                  },
                  {
                    answer_id: 642,
                    answer_text: "60 minutes per day",
                    is_correct: true,
                  },
                  {
                    answer_id: 643,
                    answer_text: "10 minutes per day",
                    is_correct: false,
                  },
                  {
                    answer_id: 644,
                    answer_text: "120 minutes per week",
                    is_correct: false,
                  },
                ],
              },
              {
                question_id: 162,
                quiz_id: 21,
                question_text:
                  "Which type of exercise focuses on increasing flexibility and range of motion?",
                answers: [
                  {
                    answer_id: 645,
                    answer_text: "Aerobic exercise",
                    is_correct: false,
                  },
                  {
                    answer_id: 646,
                    answer_text: "Strength training",
                    is_correct: false,
                  },
                  {
                    answer_id: 647,
                    answer_text: "Cardiovascular exercise",
                    is_correct: false,
                  },
                  {
                    answer_id: 648,
                    answer_text: "Flexibility training",
                    is_correct: true,
                  },
                ],
              },
              {
                question_id: 163,
                quiz_id: 21,
                question_text:
                  "What are the potential benefits of regular physical activity?",
                answers: [
                  {
                    answer_id: 649,
                    answer_text: "Decreased energy levels",
                    is_correct: false,
                  },
                  {
                    answer_id: 650,
                    answer_text: "Increased risk of chronic diseases",
                    is_correct: false,
                  },
                  {
                    answer_id: 651,
                    answer_text: "Improved mental well-being",
                    is_correct: true,
                  },
                  {
                    answer_id: 652,
                    answer_text: "Reduced muscle mass",
                    is_correct: false,
                  },
                ],
              },
              {
                question_id: 164,
                quiz_id: 21,
                question_text:
                  "How does exercise contribute to cardiovascular health?",
                answers: [
                  {
                    answer_id: 653,
                    answer_text: "It does not impact cardiovascular health",
                    is_correct: false,
                  },
                  {
                    answer_id: 654,
                    answer_text:
                      "It improves lung capacity but not heart health",
                    is_correct: false,
                  },
                  {
                    answer_id: 655,
                    answer_text:
                      "It strengthens the heart, improves blood circulation, and lowers the risk of heart diseases",
                    is_correct: true,
                  },
                  {
                    answer_id: 656,
                    answer_text: "It only benefits bone health",
                    is_correct: false,
                  },
                ],
              },
              {
                question_id: 165,
                quiz_id: 21,
                question_text:
                  "What is the role of strength training in an exercise routine?",
                answers: [
                  {
                    answer_id: 657,
                    answer_text:
                      "Strength training has no significant benefits",
                    is_correct: false,
                  },
                  {
                    answer_id: 658,
                    answer_text:
                      "It helps increase muscle strength, metabolism, and bone density",
                    is_correct: true,
                  },
                  {
                    answer_id: 659,
                    answer_text: "Strength training only benefits athletes",
                    is_correct: false,
                  },
                  {
                    answer_id: 660,
                    answer_text: "It improves cardiovascular endurance",
                    is_correct: false,
                  },
                ],
              },
              {
                question_id: 166,
                quiz_id: 21,
                question_text:
                  "What is the recommended duration for cool-down exercises after a workout?",
                answers: [
                  {
                    answer_id: 661,
                    answer_text: "No cool-down is necessary",
                    is_correct: false,
                  },
                  {
                    answer_id: 662,
                    answer_text: "5 minutes",
                    is_correct: false,
                  },
                  {
                    answer_id: 663,
                    answer_text: "15 minutes",
                    is_correct: false,
                  },
                  {
                    answer_id: 664,
                    answer_text: "10-15 minutes",
                    is_correct: true,
                  },
                ],
              },
              {
                question_id: 167,
                quiz_id: 21,
                question_text:
                  "How can individuals overcome common barriers to exercise?",
                answers: [
                  {
                    answer_id: 665,
                    answer_text: "Avoid physical activity entirely",
                    is_correct: false,
                  },
                  {
                    answer_id: 666,
                    answer_text:
                      "Stay consistent, set achievable goals, find enjoyable activities, and address time constraints",
                    is_correct: true,
                  },
                  {
                    answer_id: 667,
                    answer_text: "Push through pain and discomfort",
                    is_correct: false,
                  },
                  {
                    answer_id: 668,
                    answer_text: "Exercise only during weekends",
                    is_correct: false,
                  },
                ],
              },
              {
                question_id: 168,
                quiz_id: 21,
                question_text: "Is stretching before exercise recommended?",
                answers: [
                  {
                    answer_id: 669,
                    answer_text: "Yes, it helps prevent injury",
                    is_correct: false,
                  },
                  {
                    answer_id: 670,
                    answer_text:
                      "No, it can decrease muscle strength before exercise",
                    is_correct: true,
                  },
                  {
                    answer_id: 671,
                    answer_text: "Stretching is only necessary for athletes",
                    is_correct: false,
                  },
                  {
                    answer_id: 672,
                    answer_text: "It is recommended only for older adults",
                    is_correct: false,
                  },
                ],
              },
            ],
          ],
        },
      },
    },
  },
  "POST /api/comments/quiz/:quiz_id": {
    description: "Creates a new comment for the specified quiz.",
    request: {
      method: "POST",
      path: "/api/comments/quiz/6",
      headers: {
        Authorization: "Bearer <access_token_value>",
      },
      body: {
        newComment: {
          comment_text: "Very educational quiz!",
        },
      },
    },
    response: {
      status: 201,
      body: {
        comment: {
          comment_id: 131,
          quiz_id: 6,
          created_at: "2023-08-21 15:33:01.783239",
          comment_text: "Very educational quiz!",
          username: "Joe",
          user_id: 2,
          likes: 0,
        },
      },
    },
  },
  "PATCH /api/quizzes/:quiz_id": {
    description:
      "Responds with the specified quiz and the updated likes value, set inc_likes to true to increase likes or false to decrease likes.",
    request: {
      method: "PATCH",
      path: "/api/quizzes/2",
      headers: {
        Authorization: "Bearer <access_token_value>",
      },
      body: {
        updatedLikes: {
          inc_likes: true,
        },
      },
      response: {
        status: 201,
        quiz: {
          quiz_id: 2,
          quiz_name: "Healthy Eating Habits",
          description:
            "Test your knowledge of healthy eating habits with this quiz. From portion control to mindful eating, this quiz covers essential strategies for maintaining a nutritious diet.",
          quiz_img:
            "https://images.pexels.com/photos/6969266/pexels-photo-6969266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          category: "Nutrition and Diet",
          user_id: 1,
          username: "David",
          release_date: "2023-08-21 15:33:01.783239",
          likes: 3,
          comment_count: 10,
          questions: [
            {
              question_id: 9,
              question_text: "What does the term 'portion control' refer to?",
              answers: [
                {
                  answer_id: 33,
                  answer_text: "Measuring food with precision",
                  is_correct: false,
                },
                {
                  answer_id: 34,
                  answer_text: "Eating large portions of high-calorie foods",
                  is_correct: false,
                },
                {
                  answer_id: 35,
                  answer_text: "Choosing nutrient-dense foods",
                  is_correct: false,
                },
                {
                  answer_id: 36,
                  answer_text: "Eating an appropriate amount of food",
                  is_correct: true,
                },
              ],
            },
            {
              question_id: 10,
              question_text: "What is the concept of 'mindful eating'?",
              answers: [
                {
                  answer_id: 37,
                  answer_text: "Eating quickly without savoring flavors",
                  is_correct: false,
                },
                {
                  answer_id: 38,
                  answer_text: "Eating while watching TV",
                  is_correct: false,
                },
                {
                  answer_id: 39,
                  answer_text: "Being fully present and savoring every bite",
                  is_correct: true,
                },
                {
                  answer_id: 40,
                  answer_text: "Eating only calorie-dense foods",
                  is_correct: false,
                },
              ],
            },
            {
              question_id: 11,
              question_text: "What is the purpose of reading food labels?",
              answers: [
                {
                  answer_id: 41,
                  answer_text: "To determine the food's expiration date",
                  is_correct: false,
                },
                {
                  answer_id: 42,
                  answer_text: "To make the food look more appealing",
                  is_correct: false,
                },
                {
                  answer_id: 43,
                  answer_text: "To calculate the number of calories burned",
                  is_correct: false,
                },
                {
                  answer_id: 44,
                  answer_text: "To make informed decisions about nutrition",
                  is_correct: true,
                },
              ],
            },
            {
              question_id: 12,
              question_text:
                "Which food group is a good source of lean protein?",
              answers: [
                {
                  answer_id: 45,
                  answer_text: "Meat and poultry",
                  is_correct: true,
                },
                {
                  answer_id: 46,
                  answer_text: "Sugars and Sweets",
                  is_correct: false,
                },
                {
                  answer_id: 47,
                  answer_text: "Fruits and Vegetables",
                  is_correct: false,
                },
                {
                  answer_id: 48,
                  answer_text: "Dairy Products",
                  is_correct: false,
                },
              ],
            },
            {
              question_id: 13,
              question_text: "What is a balanced plate approach to eating?",
              answers: [
                {
                  answer_id: 49,
                  answer_text: "Eating only one type of food at each meal",
                  is_correct: false,
                },
                {
                  answer_id: 50,
                  answer_text: "Eating large portions of protein",
                  is_correct: false,
                },
                {
                  answer_id: 51,
                  answer_text: "Balancing different food groups on your plate",
                  is_correct: true,
                },
                {
                  answer_id: 52,
                  answer_text: "Skipping meals to create a calorie deficit",
                  is_correct: false,
                },
              ],
            },
            {
              question_id: 14,
              question_text:
                "What is the importance of eating a variety of colorful fruits and vegetables?",
              answers: [
                {
                  answer_id: 53,
                  answer_text: "They provide a natural source of caffeine",
                  is_correct: false,
                },
                {
                  answer_id: 54,
                  answer_text: "They add flavor to meals",
                  is_correct: false,
                },
                {
                  answer_id: 55,
                  answer_text: "They have a lower calorie content",
                  is_correct: false,
                },
                {
                  answer_id: 56,
                  answer_text: "They offer a variety of essential nutrients",
                  is_correct: true,
                },
              ],
            },
            {
              question_id: 15,
              question_text:
                "What are some strategies for reducing added sugar in the diet?",
              answers: [
                {
                  answer_id: 57,
                  answer_text:
                    "Replacing sugary beverages with water or herbal tea",
                  is_correct: true,
                },
                {
                  answer_id: 58,
                  answer_text: "Avoiding all carbohydrates",
                  is_correct: false,
                },
                {
                  answer_id: 59,
                  answer_text: "Eating larger portions of sugary foods",
                  is_correct: false,
                },
                {
                  answer_id: 60,
                  answer_text: "Skipping meals to reduce sugar intake",
                  is_correct: false,
                },
              ],
            },
            {
              question_id: 16,
              question_text:
                "Why is it important to listen to your body's hunger and fullness cues?",
              answers: [
                {
                  answer_id: 61,
                  answer_text:
                    "It prevents you from eating any unhealthy foods",
                  is_correct: false,
                },
                {
                  answer_id: 62,
                  answer_text:
                    "It supports intuitive eating and prevents overeating",
                  is_correct: true,
                },
                {
                  answer_id: 63,
                  answer_text: "It helps you to gain weight more quickly",
                  is_correct: false,
                },
                {
                  answer_id: 64,
                  answer_text: "It encourages overeating",
                  is_correct: false,
                },
              ],
            },
          ],
        },
      },
    },
  },
  "PATCH /api/comments/:comment_id": {
    description:
      "Responds with the specified comment and with the updated likes value, set inc_likes to true to increase likes or false to decrease likes.",
    request: {
      method: "PATCH",
      path: "/api/comments/2",
      headers: {
        Authorization: "Bearer <access_token_value>",
      },
      body: {
        inc_likes: false,
      },
    },
    response: {
      status: 201,
      comment: {
        likes: -1,
        comment_id: 2,
        quiz_id: 1,
        comment_text:
          "Etiam tempor orci at tellus vulputate, at rhoncus justo tristique.",
        user_id: 1,
        username: "Joe",
        created_at: "2023-08-21 15:33:01.783239",
      },
    },
  },
  "DELETE /api/quizzes/:quiz_id": {
    description:
      "Deletes the quiz specified along with the associated comments, likes, questions, and answers. If the user posted the quiz.",
    request: {
      method: "DELETE",
      path: "/api/quizzes/1",
      headers: {
        Authorization: "Bearer <access_token>",
      },
    },
    response: {
      status: 204,
    },
  },
  "DELETE /api/comments/:comment_id": {
    description:
      "Deletes the comment specified along with the associated likes. If the user posted the comment.",
    request: {
      method: "DELETE",
      path: "/api/comments/11",
      headers: {
        Authorization: "Bearer <access_token>",
      },
    },
    response: {
      status: 204,
    },
  },
  "GET /api/quizzes/:quiz_id/user/likes": {
    description:
      "Responds with the user's liked status for the specified quiz. The hasLiked property is a boolean value: true indicates the user has liked the quiz, false indicates dislike, and null indicates no vote.",
    request: {
      method: "GET",
      path: "/api/quizzes/1/user/likes",
      headers: {
        Authorization: "Bearer <access_token>",
      },
    },
    response: {
      status: 200,
      body: {
        likedStatus: {
          hasLiked: true,
        },
      },
    },
  },
  "GET /api/comments/quiz/:quiz_id/user/likes": {
    description:
      "Responds with an array of votes representing the user's votes on the comments for the specified quiz.",
    request: {
      method: "GET",
      path: "/api/comments/quiz/1/user/likes",
      headers: {
        Authorization: "Bearer <access_token_value>",
      },
    },
    response: {
      status: 200,
      likedStatus: {
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
      },
    },
  },
};

export default endpoints;
