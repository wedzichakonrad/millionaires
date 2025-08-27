import { answerLetters } from '../components/containers/answers-container/components/answers/components/single-answer/single-answer';
import { Question } from '../components/millionaires';
import { shuffleArray } from '../utils/helpers';

const getMessage = (currentQuestion: Question | undefined) => {

    if (!currentQuestion) return;
    
    const mappedAnswers = currentQuestion.answers.map((answer, index) => ({...answer, letter: answerLetters[index]}));
    const correctAnswer = mappedAnswers.find(answer => answer.isCorrect);

    const hints = [
        `I think it can be ${answerLetters[0]} but it also can be ${answerLetters[1]}`,
        `I am sure that it is ${correctAnswer?.letter} I saw it in Galileo!`
    ]
    hints.sort(shuffleArray)


    return hints[0];
}

export const PhoneFriendMessageService = {
    getMessage,
}