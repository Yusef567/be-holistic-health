"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizzesWithUserIds = exports.prepareQuestionData = void 0;
const createQuizIdLookUp = (quizzesArr) => {
    const quizIdLookUp = {};
    quizzesArr.forEach((quiz) => {
        quizIdLookUp[quiz.quiz_name] = quiz.quiz_id;
    });
    return quizIdLookUp;
};
const prepareQuestionData = (questionsArr, quizzesArr) => {
    const quizIdLookUp = createQuizIdLookUp(quizzesArr);
    const formattedQuestionsArr = questionsArr.map((question) => {
        const correctQuizId = quizIdLookUp[question.quiz_name];
        const questionCopy = Object.assign(Object.assign({}, question), { quiz_id: correctQuizId });
        return questionCopy;
    });
    return formattedQuestionsArr;
};
exports.prepareQuestionData = prepareQuestionData;
const createUserIdLookUp = (usersArr) => {
    const userIdLookUp = {};
    usersArr.forEach((user) => {
        userIdLookUp[user.username] = user.user_id;
    });
    return userIdLookUp;
};
const quizzesWithUserIds = (quizzesArr, usersArr) => {
    const userIdLookUp = createUserIdLookUp(usersArr);
    const formattedQuizzes = quizzesArr.map((quiz) => {
        const correctUserId = userIdLookUp[quiz.username];
        const quizCopy = Object.assign(Object.assign({}, quiz), { user_id: correctUserId });
        return quizCopy;
    });
    return formattedQuizzes;
};
exports.quizzesWithUserIds = quizzesWithUserIds;
