import { Answer, Question } from '../utils/types/types';
import { shuffleArray } from '../utils/helpers/helpers';
import { config } from '../utils/config/config';

const randomOptionIndexOne = 0;
const randomOptionIndexTwo = 1;

const getRandomHint = ( answers: Answer[]) => {
    const filteredAnswers = answers.filter(answer => !answer.disabled)
    const correctAnswer = filteredAnswers.find(answer => answer.isCorrect);

    if (!correctAnswer) return;

    const letters = config.answerLetters;
    let lettersWithCorrect = []

    if (filteredAnswers.length === 2) {
        for (const answer of filteredAnswers) {
            lettersWithCorrect.push(answer.letter)
        }
    } else {
        lettersWithCorrect.push(correctAnswer.letter)
        if (letters[randomOptionIndexOne] === correctAnswer.letter) {
            lettersWithCorrect.push(letters[randomOptionIndexTwo])
        } else {
            lettersWithCorrect.push(letters[randomOptionIndexOne])
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