import { answerLetters } from '../containers/answers/answers-container';
import { shuffleArray } from '../utils/helpers';

export const getGameData = async () => {
    const apiUrl = 'https://opentdb.com/api.php?amount=15&type=multiple';
    return await fetch(apiUrl).then(res => res.json())
        .then(data => {
                if (data.results) {
                    return data.results.map((element: any) => {
                        const shuffledLetters = answerLetters.sort(shuffleArray)

                        const question = element.question;
                        const answers = [
                            { content: element.correct_answer, isCorrect: true, letter: shuffledLetters[0] },
                            ...element.incorrect_answers.map((answer: string, index: number) => {
                                return { content: answer, isCorrect: false, letter: shuffledLetters[index + 1]}
                            }),
                        ]

                        return {question, answers};
                    })
                }
            }
        ).catch(err => console.log(err))
}
