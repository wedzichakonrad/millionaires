import { Answer, Question } from '../utils/types/types';
import { shuffleArray } from '../utils/helpers';
import { config } from '../utils/config/config';

const randomOptionIndexOne = 0;
const randomOptionIndexTwo = 1;

const getRandomHint = (correctAnswer: Answer | undefined, answers: Answer[]) => {
    if (!correctAnswer) return;

    const letters = config.answerLetters;
    const filteredAnswers = answers.filter(answer => !answer.isCorrect && !answer.disabled)    
    const lettersWithCorrect = [correctAnswer.letter]

    for (let i = 0; i < letters.length; i++) {
        if (lettersWithCorrect[0] !== letters[i] && lettersWithCorrect.length === 1) {
            lettersWithCorrect.push(letters[i])
        }
    }

    const shuffledLettersWithCorrect = lettersWithCorrect.sort(shuffleArray);
    
    const hintSure = `It must be ${correctAnswer.letter} !`;
    const hintMixed = `I think it can be ${shuffledLettersWithCorrect[randomOptionIndexOne]} but it also can be ${shuffledLettersWithCorrect[randomOptionIndexTwo]}`;
    const hintUnsure = `I have no idea...`;

    if (filteredAnswers.length === 1) return hintSure;

    const possibleHints = [
       hintMixed,
       hintUnsure,
       hintSure,
    ]

    possibleHints.sort(shuffleArray)

    return possibleHints[randomOptionIndexOne];
}

const getMessage = (currentQuestion: Question | undefined) => {
    if (!currentQuestion) return;
    
    const correctAnswer = currentQuestion.answers.find(answer => answer.isCorrect);

    return getRandomHint(correctAnswer, currentQuestion.answers);
}

export const PhoneFriendMessageService = {
    getMessage,
}