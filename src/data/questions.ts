import { Question } from '../types';
import { examQuestionsA } from './questions-a';
import { examQuestionsB } from './questions-b';
import { examQuestionsC } from './questions-c';
import { examQuestionsD } from './questions-d';

type ExamQuestions = {
  [key: string]: Question[];
};

export const examQuestions: ExamQuestions = {
  A: examQuestionsA,
  B: examQuestionsB,
  C: examQuestionsC,
  D: examQuestionsD
}; 