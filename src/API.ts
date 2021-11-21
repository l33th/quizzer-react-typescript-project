import QuestionCard from './components/QuestionCard';
import { shuffleArray } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answer: string[]; // this was originally a string but gave an error
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.map((question: Question) => ({
    ...question,
    answer: shuffleArray([
      ...question.incorrect_answer, // this gave an error when its type was string instead of string[]
      question.correct_answer,
    ]),
  }));
};
