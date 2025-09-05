import { answerLetters } from '../components/containers/answers-container/answers-container';
import { Answer, Question } from '../components/millionaires';
import { shuffleArray } from '../utils/helpers';

const randomOptionIndexOne = 0;
const randomOptionIndexTwo = 1;

const getRandomHint = (correctAnswer: Answer | undefined) => {
        const hints = [
        `I think it can be ${answerLetters[randomOptionIndexOne]} but it also can be ${answerLetters[randomOptionIndexTwo]}`,
        `I am sure that it is ${correctAnswer?.letter} I saw it in Galileo!`
    ]

        hints.sort(shuffleArray)

    return hints[0];
}

const getMessage = (currentQuestion: Question | undefined) => {
    if (!currentQuestion) return;
    
    const mappedAnswers = currentQuestion.answers.map((answer, index) => ({...answer, letter: answerLetters[index]}));
    const correctAnswer = mappedAnswers.find(answer => answer.isCorrect);

    return getRandomHint(correctAnswer);
}

export const PhoneFriendMessageService = {
    getMessage,
}