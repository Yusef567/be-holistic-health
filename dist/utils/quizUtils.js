"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formattedQuestionsAndAnswers = exports.createQuestionIdLookUp = void 0;
const createQuestionIdLookUp = (questionsAnswersArr) => {
    const questionIdLookUp = {};
    questionsAnswersArr.forEach((questionAndAnswerObj) => {
        questionIdLookUp[questionAndAnswerObj.question_id] =
            questionAndAnswerObj.question_text;
    });
    return questionIdLookUp;
};
exports.createQuestionIdLookUp = createQuestionIdLookUp;
const formattedQuestionsAndAnswers = (questionsAnswersArr) => {
    const questionIdLookUp = (0, exports.createQuestionIdLookUp)(questionsAnswersArr);
    const answersWithSameQuestions = Object.keys(questionIdLookUp).map((questionId) => {
        return questionsAnswersArr.filter((questionAnswerObj) => questionAnswerObj.question_id === Number(questionId));
    });
    const formattedData = answersWithSameQuestions.map((groupedAnswersArr) => {
        const answers = groupedAnswersArr.map((singleAnswerObj) => {
            const { answer_id, answer_text, is_correct } = singleAnswerObj;
            return { answer_id, answer_text, is_correct };
        });
        const { question_id, question_text } = groupedAnswersArr[0];
        return { question_id, question_text, answers };
    });
    return formattedData;
};
exports.formattedQuestionsAndAnswers = formattedQuestionsAndAnswers;
