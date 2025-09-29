import { Answer, Question } from '../utils/types/types';
import { shuffleArray } from '../utils/helpers/helpers';
import { config } from '../utils/config/config';

const randomOptionIndexOne = 0;
const randomOptionIndexTwo = 1;

const getRandomHint = ( answers: Answer[]) => {
    const correctAnswer = answers.find(answer => answer.isCorrect);

    if (!correctAnswer) return;

    const letters = config.answerLetters;
    const lettersWithCorrect = [correctAnswer.letter]

    for (let i = 0; i < letters.length; i++) {
        if (lettersWithCorrect[randomOptionIndexOne] !== letters[i] && lettersWithCorrect.length === randomOptionIndexTwo) {
            lettersWithCorrect.push(letters[i])
        }
    }

    const shuffledLettersWithCorrect = lettersWithCorrect.sort(shuffleArray);
    
    const hintSure = `It must be ${correctAnswer.letter} !`;
    const hintMixed = `I think it may be ${shuffledLettersWithCorrect[randomOptionIndexOne]} but ${shuffledLettersWithCorrect[randomOptionIndexTwo]} is also very possible.`;
    const hintUnsure = `I have no idea...`;

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
    
    return getRandomHint(currentQuestion.answers);
}

export const PhoneFriendMessageService = {
    getMessage,
}