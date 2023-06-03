interface Quiz {
  quiz_id: number;
  quiz_name: string;
  category: string;
  quiz_img: string;
  description: string;
  username: string;
  likes: number;
  release_date: Date;
}

interface QuizIdLookup {
  [quiz_name: string]: number;
}

interface Question {
  quiz_name: string;
  question_text: string;
}

interface CopiedQuestion extends Question {
  quiz_id: number;
}

const createQuizIdLookUp = (quizzesArr: Quiz[]) => {
  const quizIdLookUp: QuizIdLookup = {};
  quizzesArr.forEach((quiz: Quiz) => {
    quizIdLookUp[quiz.quiz_name] = quiz.quiz_id;
  });
  return quizIdLookUp;
};

export const prepareQuestionData = (
  questionsArr: Question[],
  quizzesArr: Quiz[]
) => {
  const quizIdLookUp = createQuizIdLookUp(quizzesArr);
  const formattedQuestionsArr = questionsArr.map((question) => {
    const correctQuizId = quizIdLookUp[question.quiz_name];
    const questionCopy: CopiedQuestion = {
      ...question,
      quiz_id: correctQuizId,
    };
    return questionCopy;
  });
  return formattedQuestionsArr;
};
