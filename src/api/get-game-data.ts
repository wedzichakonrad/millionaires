import { ApiQuestion, Question } from '../utils/types/types';
import { shuffleArray } from '../utils/helpers/helpers';
import { config } from '../utils/config/config';

interface GetGameDataProps {
    retryDelay?: number,
    maxRetries?: number,
    attempt?:  number,
    category: string
}

interface FetchDataProps {
    setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
    setData: React.Dispatch<React.SetStateAction<Question[]>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    category: string;
}

const fetchGameData = async ({retryDelay = 3000, maxRetries = 5, attempt = 1, category}: GetGameDataProps):  Promise<Question[]> => {
    const url = `${config.apiUrl}?amount=15&type=multiple${category ? `&category=${category}` : ''}`;

    try {
        const response = await fetch(url);

        if (response.status === 429) {
            if (attempt < maxRetries) {
                await new Promise(resolve => setTimeout(resolve, retryDelay));
                return fetchGameData({retryDelay, maxRetries, attempt:  attempt + 1, category});
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
            const shuffledLetters = config.answerLetters.sort(shuffleArray);
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

export const getGameData = async ({setIsFetching, setData, setError, category}: FetchDataProps) => {
    setIsFetching(true);
    try {
        const data = await fetchGameData({category});

        if (data && data.length > 0) {
            setData?.(data);
            setError(null);
        } else {
            setError("No data received");
        }
    } catch (err) {
        console.error(err)
        setError("Failed to load questions.");
    } finally {
        setIsFetching(false);
    }
};