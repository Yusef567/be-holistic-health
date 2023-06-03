"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareQuestionData = void 0;
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
