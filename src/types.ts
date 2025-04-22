export type ExamType = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: number;
  text: string;
  options: {
    key: string;
    text: string;
  }[];
  correctAnswers: string[];  // Array of option keys
  image?: string; // Base64 encoded image or path to image
}

export interface ExamState {
  answers: {
    [questionId: number]: string[];  // Array of selected option keys
  };
  startTime: Date | null;
  examType: ExamType | null;
}

export interface ExamResult {
  questionId: number;
  userAnswers: string[];
  correctAnswers: string[];
  isCorrect: boolean;
} 