import { InsertedUser } from "../seeds/seed";

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

interface UserIdLookUp {
  [username: string]: number;
}

interface NotInsertedQuiz {
  quiz_name: string;
  category: string;
  quiz_img: string;
  description: string;
  username: string;
}

interface CopiedNotInsertedQuiz extends NotInsertedQuiz {
  user_id: number;
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

const createUserIdLookUp = (usersArr: InsertedUser[]) => {
  const userIdLookUp: UserIdLookUp = {};
  usersArr.forEach((user: InsertedUser) => {
    userIdLookUp[user.username] = user.user_id;
  });
  return userIdLookUp;
};

export const quizzesWithUserIds = (
  quizzesArr: NotInsertedQuiz[],
  usersArr: InsertedUser[]
) => {
  const userIdLookUp = createUserIdLookUp(usersArr);
  const formattedQuizzes = quizzesArr.map((quiz: NotInsertedQuiz) => {
    const correctUserId = userIdLookUp[quiz.username];
    const quizCopy: CopiedNotInsertedQuiz = {
      ...quiz,
      user_id: correctUserId,
    };
    return quizCopy;
  });
  return formattedQuizzes;
};
