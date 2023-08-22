# BE-quiz-odyssey

This is a RESTful API for an educational health platform covering a range of topics, including respiratory and heart illnesses, lifestyle, and mental health. Users can engage in informative quizzes without an account, while registered users benefit from enhanced features such as liking, disliking, and commenting on quizzes. Healthcare professionals can post quizzes to ensure accuracy, promoting a collaborative approach to health education. Whether utilized for individual learning, community interaction, or professional contribution, this API provides a range of solutions to meet your needs.

## Authentication and Authorization

Authentication in this API is utilizes using combination of access and refresh token strategy with JSON Web Tokens (JWT). To ensure that only authorized users can access protected endpoint and that tokens are refreshed as needed. The refresh token is securely stored as an HTTP-only cookie, helping to prevent potential security vulnerabilities

### User Login

To authenticate a user, make a POST request to /api/auth/login with the user's username and password in the request body. The API will respond with an access token (valid for 15 minutes) and set a refresh token (valid for 7 days) as an HTTP-only cookie

### Refresh Token

When the access token expires, you can obtain a new one by sending a POST request to /api/auth/refresh-token with the refresh token as an HTTP-only cookie

### User Logout

To log out a user, make a POST request to /api/auth/logout with the refresh token as an HTTP-only cookie, this will invalidate the refresh token

## Endpoints Documentation

## Installation and Setup

### Prerequisites

- This API was built using PostgreSQL(version 14.6) and Node.js(version 19.3.0)
- To check which versions of Node.js and PSQL you have use `node -v` and `psql -version` commands
- To install PostgreSQL visit `https://www.postgresql.org/download/`
- To install Node.js visit `https://nodejs.org/en/download/package-manager/`

### Clone the Repository:

Open your terminal and navigate to the directory where you want to store the project. Then, run the following command to clone the repository: `git clone `

### Navigate to the Project Directory:

Move into the project directory using the following command: `cd BE-quiz-odyssey`

### Open the Project in VS Code:

If you're using Visual Studio Code, you can open the project directly from the terminal by running: `code .`

### Install Dependencies:

Install the required dependencies by running: `npm install`

### Set Up Environment Variables:

- You will need to create two `.env` files for your enviroment variables in the root directory
- First create a file called `.env.test` and add the following enviroment variables. `PGDATABASE=holistic_health_test`, `JWT_SECRET=your_jwt_secret`, `REFRESH_TOKEN_SECRET=your_refresh_token_secret`
- Then create a file called `.env.devlopment` and add the following enviroment variables.`PGDATABASE=holistic_health`, `JWT_SECRET=your_jwt_secret`, `REFRESH_TOKEN_SECRET=your_refresh_token_secret`
- Make sure to add the following `.env.*` into your `gitignore` file to ensure your sensitive information remains private

### Creating the Databases

To create the databases locally you can run the follwoing command: `npm run setup-dbs`

### Seeding the Databases

Once you have created the databases you can seed the development database by running the following command `npm run seed`, any changes made to the development database will persist. If you want to reset the development database and remove any changes run the same command again.

The test database is reseeded before each test is ran and restarts every time you run the tests by running the `npm test` command with the test data, changes to the test database will not presist.

### Testing

Testing has been done using `jest` and `supertest`. Tests have been written following the TDD(Test-driven Development) process, to ensure the endpoints are working as intended

The tests are located in the `src/__tests__` directory and are written in TypeScript. By default, these TypeScript test files are run using the ts-jest preset

You can run all the tests using the following command: `npm test`

Feel free to add new test files to the `src/__tests__` directory, and run the same command followed by the file name, to run a specific test file run: `npm test filename.test.ts`

### Running the Server Locally

To run the server locally, you have two options:

Option 1: Standard Build and Run use the following command: `npm start`, to stop running the server use `ctrl + c`

Option 2: Development mode with Auto-Reload, for a development environment with auto-reloading whenever code changes are detected run: `npm run dev`, to stop running the server use `ctrl + c`
