export type Answer = {
  content: string;
  isCorrect: boolean;
  letter: string;
  disabled?: boolean;
}

export type Question = {
  question: string;
  answers: Answer[];
}

export type NotificationState = {
 [key: string]: { [key: string]: boolean }
}

export type ApiQuestion = {
    category:  string,
    correct_answer:  string,
    difficulty:  string,
    incorrect_answers:  string[],
    question:  string,
    type:  string,
}