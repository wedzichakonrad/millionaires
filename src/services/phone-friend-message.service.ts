import { answerLetters } from '../containers/answers/answers-container';
import { Answer, Question } from '../containers/millionaires';
import { shuffleArray } from '../utils/helpers';

const randomOptionIndexOne = 0;
const randomOptionIndexTwo = 1;

const getRandomHint = (correctAnswer: Answer | undefined, answers: Answer[]) => {
    if (!correctAnswer) return;

    const filteredAnswers = answers.filter(answer => !answer.isCorrect && !answer.disabled)    
    const lettersWithCorrect = [correctAnswer.letter]

    for (let i = 0; i < answerLetters.length; i++) {
        if (lettersWithCorrect[0] !== answerLetters[i] && lettersWithCorrect.length === 1) {
            lettersWithCorrect.push(answerLetters[i])
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