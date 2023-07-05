"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endpoints = {
    "GET /api": {
        description: "Responds with a JSON object of all the available endpoints of the API, with a description of what it will respond with and an example request and response",
    },
    "POST /api/auth/login": {
        description: "Authenticates a user and generates an access token, requires a username and password in the request body. The response includes an access token and sets a refresh token as an HTTP-only cookie",
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
        description: "Protected endpoint that requires a valid JWT access token for authentication, responds with a success message",
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
        description: "Creates a new user with requires a username and password. Responds with the newly created user object if successful",
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
        description: "Generates a new access token using a valid refresh token. Responds with the new access token if successful.",
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
        description: "Logs out the user, clears the refresh token and sets an expired expiration date.",
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
                    { category_id: 1, category: "Movies" },
                    { category_id: 2, category: "Travel" },
                    { category_id: 3, category: "Science" },
                ],
            },
        },
    },
    "GET /api/quizzes": {
        description: "Responds with an array of quiz objects and a total count of available quizzes with the applied filters. Can be queried with a page value (p) and limit number to implement pagination. The quizzes can be sorted (sort_by) by any valid column and ordered (order_by) in ascending (asc) or descending (desc) order",
        queries: [
            {
                columns: ["quiz_name", "category", "release_date", "likes"],
            },
            {
                name: "category",
                description: "Filter quizzes by category",
                example: "/api/quizzes?category=Travel",
            },
            {
                name: "limit",
                description: "Limit the number of quizzes per page (default limit of 10)",
                example: "/api/quizzes?limit=5",
            },
            {
                name: "p",
                description: "Specify the page number for pagination (default page of 1)",
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
            path: "/api/quizzes?category=Travel&limit=1",
        },
        response: {
            status: 200,
            body: {
                quizzes: [
                    {
                        quiz_id: 3,
                        quiz_name: "Adventure Travel Trivia",
                        category: "Travel",
                        quiz_img: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                        description: "Test your knowledge of adventure travel destinations and activities with this trivia quiz.",
                        username: "Alex456",
                        user_id: 2,
                        release_date: "2023-07-05T15:23:50.307Z",
                        likes: 0,
                    },
                ],
                totalCount: 2,
            },
        },
    },
    "GET /api/quizzes/:quiz_id": {
        description: "Responds with the quiz info and questions for the specified quiz_id",
        request: {
            method: "GET",
            path: "/api/quizzes/4",
        },
        response: {
            status: 200,
            body: {
                quiz: {
                    quiz_id: 4,
                    quiz_name: "Travel Destinations Trivia",
                    category: "Travel",
                    user_id: 1,
                    username: "Tom123",
                    release_date: "2023-07-05T15:23:50.307Z",
                    description: "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
                    quiz_img: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    likes: 1,
                    comment_count: 0,
                    questions: [
                        {
                            question_id: 25,
                            question_text: "What is the tallest waterfall in the world?",
                            answers: [
                                { answer_id: 97, answer_text: "Angel Falls", is_correct: true },
                                {
                                    answer_id: 98,
                                    answer_text: "Niagara Falls",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 99,
                                    answer_text: "Iguazu Falls",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 100,
                                    answer_text: "Victoria Falls",
                                    is_correct: false,
                                },
                            ],
                        },
                        {
                            question_id: 26,
                            question_text: "Which country is home to the famous ancient city of Petra?",
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
                            question_text: "Which country is famous for its beautiful tulip fields?",
                            answers: [
                                {
                                    answer_id: 109,
                                    answer_text: "Netherlands",
                                    is_correct: true,
                                },
                                { answer_id: 110, answer_text: "Germany", is_correct: false },
                                { answer_id: 111, answer_text: "France", is_correct: false },
                                { answer_id: 112, answer_text: "Denmark", is_correct: false },
                            ],
                        },
                        {
                            question_id: 29,
                            question_text: "What is the name of the iconic statue in Rio de Janeiro, Brazil?",
                            answers: [
                                {
                                    answer_id: 113,
                                    answer_text: "Christ the Redeemer",
                                    is_correct: true,
                                },
                                {
                                    answer_id: 114,
                                    answer_text: "The Colosseum",
                                    is_correct: false,
                                },
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
                            question_text: "Which city is renowned for its historical ruins of Machu Picchu?",
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
                                {
                                    answer_id: 121,
                                    answer_text: "Japanese Yen",
                                    is_correct: true,
                                },
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
                            question_text: "Which African country is known for its wildlife safaris?",
                            answers: [
                                { answer_id: 125, answer_text: "Kenya", is_correct: true },
                                {
                                    answer_id: 126,
                                    answer_text: "Madagascar",
                                    is_correct: false,
                                },
                                { answer_id: 127, answer_text: "Tanzania", is_correct: false },
                                {
                                    answer_id: 128,
                                    answer_text: "South Africa",
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
        description: "Responds with an array of comments for the specified quiz_id, ordered by newest first",
        queries: [
            {
                name: "limit",
                description: "Limit the number of comments per page (default limit of 10)",
                example: "/api/comments/quiz/2?limit=5",
            },
            {
                name: "p",
                description: "Specify the page number for pagination (default page of 1)",
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
                        comment_id: 1,
                        quiz_id: 1,
                        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        username: "Tom123",
                        user_id: 1,
                        created_at: "2023-07-05T15:23:50.307Z",
                        likes: 0,
                    },
                    {
                        comment_id: 2,
                        quiz_id: 1,
                        comment_text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
                        username: "Tom123",
                        user_id: 1,
                        created_at: "2023-07-05T15:23:50.307Z",
                        likes: 0,
                    },
                    {
                        comment_id: 3,
                        quiz_id: 1,
                        comment_text: "Etiam sit amet viverra sem, vitae aliquet orci.",
                        username: "Tom123",
                        user_id: 1,
                        created_at: "2023-07-05T15:23:50.307Z",
                        likes: 2,
                    },
                    {
                        comment_id: 4,
                        quiz_id: 1,
                        comment_text: "Nulla sollicitudin purus ut mauris posuere gravida.",
                        username: "Tom123",
                        user_id: 1,
                        created_at: "2023-07-05T15:23:50.307Z",
                        likes: 0,
                    },
                    {
                        comment_id: 5,
                        quiz_id: 1,
                        comment_text: "Nulla sollicitudin purus ut mauris posuere gravida.",
                        username: "Tom123",
                        user_id: 1,
                        created_at: "2023-07-05T15:23:50.307Z",
                        likes: 0,
                    },
                    {
                        comment_id: 6,
                        quiz_id: 1,
                        comment_text: "Nulla sollicitudin purus ut mauris posuere gravida.",
                        username: "Tom123",
                        user_id: 1,
                        created_at: "2023-07-05T15:23:50.307Z",
                        likes: 0,
                    },
                    {
                        comment_id: 7,
                        quiz_id: 1,
                        comment_text: "Nulla sollicitudin purus ut mauris posuere gravida.",
                        username: "Tom123",
                        user_id: 1,
                        created_at: "2023-07-05T15:23:50.307Z",
                        likes: 0,
                    },
                    {
                        comment_id: 8,
                        quiz_id: 1,
                        comment_text: "Nulla sollicitudin purus ut mauris posuere gravida.",
                        username: "Tom123",
                        user_id: 1,
                        created_at: "2023-07-05T15:23:50.307Z",
                        likes: 0,
                    },
                    {
                        comment_id: 9,
                        quiz_id: 1,
                        comment_text: "Nulla sollicitudin purus ut mauris posuere gravida.",
                        username: "Tom123",
                        user_id: 1,
                        created_at: "2023-07-05T15:23:50.307Z",
                        likes: 2,
                    },
                    {
                        comment_id: 10,
                        quiz_id: 1,
                        comment_text: "Nulla sollicitudin purus ut mauris posuere gravida.",
                        username: "Tom123",
                        user_id: 1,
                        created_at: "2023-07-05T15:23:50.307Z",
                        likes: 0,
                    },
                ],
            },
        },
    },
    "POST /api/quizzes": {
        description: "Creates a new quiz by providing the necessary information. Each quiz should have 8 to 16 questions, each question must include 4 answer options with only one option being correct.",
        request: {
            headers: {
                Authorization: "Bearer <access_token_value>",
            },
            body: {
                newQuiz: {
                    quiz_name: "Travel Destinations Trivia",
                    category: "Travel",
                    release_date: "2023-07-05T15:23:50.307Z",
                    description: "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
                    quiz_img: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    questions: [
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
                    ],
                },
            },
        },
        response: {
            status: 201,
            body: {
                addedQuiz: {
                    quiz_id: 11,
                    quiz_name: "Travel Destinations Trivia",
                    category: "Travel",
                    user_id: 2,
                    username: "Alex456",
                    release_date: "2023-07-05T15:23:50.307Z",
                    description: "Test your knowledge of popular travel destinations around the world with this trivia quiz.",
                    quiz_img: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    likes: 0,
                    comment_count: 0,
                    questions: [
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
                                {
                                    answer_id: 341,
                                    answer_text: "San Francisco",
                                    is_correct: true,
                                },
                                {
                                    answer_id: 342,
                                    answer_text: "New York City",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 343,
                                    answer_text: "Los Angeles",
                                    is_correct: false,
                                },
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
                                {
                                    answer_id: 351,
                                    answer_text: "North America",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 352,
                                    answer_text: "South America",
                                    is_correct: false,
                                },
                            ],
                        },
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
                    comment_text: "Great quiz!",
                },
            },
        },
        response: {
            status: 201,
            body: {
                comment: {
                    comment_id: 16,
                    quiz_id: 6,
                    created_at: "2023-07-05T15:23:50.307Z",
                    comment_text: "Great quiz!",
                    username: "Alex456",
                    user_id: 2,
                    likes: 0,
                },
            },
        },
    },
    "PATCH /api/quizzes/:quiz_id": {
        description: "Updates the likes value for the specified quiz, set inc_likes to true to increase likes or false to decrease likes.",
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
                    likes: 1,
                    quiz_id: 2,
                    quiz_name: "Blockbuster Movie Challenge",
                    description: "Put your knowledge of blockbuster movies to the test with this exciting quiz. From magical adventures to action.",
                    quiz_img: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    category: "Movies",
                    user_id: 1,
                    username: "Tom123",
                    release_date: "2023-07-05T15:23:50.307Z",
                    comment_count: 0,
                    questions: [
                        {
                            question_id: 9,
                            question_text: "Which actor played Ron Weasley in the Harry Potter film series?",
                            answers: [
                                {
                                    answer_id: 33,
                                    answer_text: "Rupert Grint",
                                    is_correct: true,
                                },
                                {
                                    answer_id: 34,
                                    answer_text: "Daniel Radcliffe",
                                    is_correct: false,
                                },
                                { answer_id: 35, answer_text: "Tom Felton", is_correct: false },
                                {
                                    answer_id: 36,
                                    answer_text: "Emma Watson",
                                    is_correct: false,
                                },
                            ],
                        },
                        {
                            question_id: 10,
                            question_text: "In which movie of the Fast and Furious franchise did Dwayne Johnson first appear?",
                            answers: [
                                { answer_id: 37, answer_text: "Fast Five", is_correct: true },
                                {
                                    answer_id: 38,
                                    answer_text: "The Fast and the Furious",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 39,
                                    answer_text: "Fast & Furious",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 40,
                                    answer_text: "The Fast and the Furious: Tokyo Drift",
                                    is_correct: false,
                                },
                            ],
                        },
                        {
                            question_id: 11,
                            question_text: "What is the name of the iconic spaceship in the Star Wars series?",
                            answers: [
                                {
                                    answer_id: 41,
                                    answer_text: "Millennium Falcon",
                                    is_correct: true,
                                },
                                { answer_id: 42, answer_text: "X-wing", is_correct: false },
                                {
                                    answer_id: 43,
                                    answer_text: "TIE Fighter",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 44,
                                    answer_text: "Star Destroyer",
                                    is_correct: false,
                                },
                            ],
                        },
                        {
                            question_id: 12,
                            question_text: "Who was the first actor to portray James Bond on the big screen?",
                            answers: [
                                {
                                    answer_id: 45,
                                    answer_text: "Sean Connery",
                                    is_correct: true,
                                },
                                {
                                    answer_id: 46,
                                    answer_text: "Roger Moore",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 47,
                                    answer_text: "Pierce Brosnan",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 48,
                                    answer_text: "Daniel Craig",
                                    is_correct: false,
                                },
                            ],
                        },
                        {
                            question_id: 13,
                            question_text: "What is the name of the wizard who possesses the One Ring in The Lord of the Rings series?",
                            answers: [
                                { answer_id: 49, answer_text: "Gollum", is_correct: false },
                                {
                                    answer_id: 50,
                                    answer_text: "Frodo Baggins",
                                    is_correct: false,
                                },
                                { answer_id: 51, answer_text: "Sauron", is_correct: false },
                                {
                                    answer_id: 52,
                                    answer_text: "Bilbo Baggins",
                                    is_correct: true,
                                },
                            ],
                        },
                        {
                            question_id: 14,
                            question_text: "Who is the captain of the Black Pearl in the Pirates of the Caribbean series?",
                            answers: [
                                {
                                    answer_id: 53,
                                    answer_text: "Captain Jack Sparrow",
                                    is_correct: true,
                                },
                                {
                                    answer_id: 54,
                                    answer_text: "Will Turner",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 55,
                                    answer_text: "Elizabeth Swann",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 56,
                                    answer_text: "Hector Barbossa",
                                    is_correct: false,
                                },
                            ],
                        },
                        {
                            question_id: 15,
                            question_text: "What is the title of the first Harry Potter movie?",
                            answers: [
                                {
                                    answer_id: 57,
                                    answer_text: "Harry Potter and the Philosopher's Stone",
                                    is_correct: true,
                                },
                                {
                                    answer_id: 58,
                                    answer_text: "Harry Potter and the Chamber of Secrets",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 59,
                                    answer_text: "Harry Potter and the Prisoner of Azkaban",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 60,
                                    answer_text: "Harry Potter and the Goblet of Fire",
                                    is_correct: false,
                                },
                            ],
                        },
                        {
                            question_id: 16,
                            question_text: "Which actor played Dominic Toretto in the Fast and Furious series?",
                            answers: [
                                { answer_id: 61, answer_text: "Vin Diesel", is_correct: true },
                                {
                                    answer_id: 62,
                                    answer_text: "Dwayne Johnson",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 63,
                                    answer_text: "Paul Walker",
                                    is_correct: false,
                                },
                                {
                                    answer_id: 64,
                                    answer_text: "Jason Statham",
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
        description: "Updates the likes value for the specified comment, set inc_likes to true to increase likes or false to decrease likes.",
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
                comment_text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
                user_id: 1,
                username: "Tom123",
                created_at: "2023-07-05T15:23:50.307Z",
            },
        },
    },
    "DELETE /api/quizzes/:quiz_id": {
        description: "Deletes the quiz specified along with the associated comments, likes, questions, and answers. If the user posted the quiz.",
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
        description: "Deletes the comment specified along with the associated likes. If the user posted the comment.",
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
        description: "Responds with the user's liked status for the specified quiz. The hasLiked property is a boolean value: true indicates the user has liked the quiz, false indicates dislike, and null indicates no vote.",
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
        description: "Responds with an array of votes representing the user's votes on the comments for the specified quiz.",
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
exports.default = endpoints;
