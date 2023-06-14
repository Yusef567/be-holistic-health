interface QuestionAndAnswer {
  answer_id: number;
  question_id: number;
  answer_text: string;
  is_correct: boolean;
  question_text: string;
}

interface QuestionIdLookup {
  [question_id: string]: string;
}

export const createQuestionIdLookUp = (
  questionsAnswersArr: QuestionAndAnswer[]
) => {
  const questionIdLookUp: QuestionIdLookup = {};
  questionsAnswersArr.forEach((questionAndAnswerObj: QuestionAndAnswer) => {
    questionIdLookUp[questionAndAnswerObj.question_id] =
      questionAndAnswerObj.question_text;
  });
  return questionIdLookUp;
};

export const formattedQuestionsAndAnswers = (
  questionsAnswersArr: QuestionAndAnswer[]
) => {
  const questionIdLookUp: QuestionIdLookup =
    createQuestionIdLookUp(questionsAnswersArr);

  const answersWithSameQuestions = Object.keys(questionIdLookUp).map(
    (questionId) => {
      return questionsAnswersArr.filter(
        (questionAnswerObj) =>
          questionAnswerObj.question_id === Number(questionId)
      );
    }
  );

  const formattedData = answersWithSameQuestions.map(
    (groupedAnswersArr: QuestionAndAnswer[]) => {
      const answers = groupedAnswersArr.map(
        (singleAnswerObj: QuestionAndAnswer) => {
          const { answer_id, answer_text, is_correct } = singleAnswerObj;
          return { answer_id, answer_text, is_correct };
        }
      );
      const { question_id, question_text } = groupedAnswersArr[0];
      return { question_id, question_text, answers };
    }
  );

  return formattedData;
};
