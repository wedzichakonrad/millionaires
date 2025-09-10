import { answerLetters } from '../containers/answers/answers-container';
import { shuffleArray } from '../utils/helpers';

type ApiQuestion = {
    category:  string,
    correct_answer:  string,
    difficulty:  string,
    incorrect_answers:  string[],
    question:  string,
    type:  string,
}

export const getGameData = async (retryDelay = 3000, maxRetries = 5, attempt = 1):  Promise<{ question: string; answers: { content: string; isCorrect: boolean; letter: string; }[]; }[]> => {
    const apiUrl = 'https://opentdb.com/api.php?amount=15&type=multiple';

    try {
        const response = await fetch(apiUrl);

        if (response.status === 429) {
            if (attempt < maxRetries) {
                await new Promise(resolve => setTimeout(resolve, retryDelay));
                return getGameData(retryDelay, maxRetries, attempt + 1);
            } else {
                throw new Error(`Max retries reached for 429 error`);
            }
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (!data.results) {
            throw new Error('No data results');
        }
        const results = data.results.map((element: ApiQuestion) => {
            const shuffledLetters = answerLetters.sort(shuffleArray);
            const question = element.question;
            const answers = [
                { content: element.correct_answer, isCorrect: true, letter: shuffledLetters[0] },
                ...element.incorrect_answers.map((answer: string, index: number) => ({
                    content: answer,
                    isCorrect: false,
                    letter: shuffledLetters[index + 1],
                })),
            ];
            return { question, answers };
        });

        return results;

    } catch (error) {
        throw error;
    }
};