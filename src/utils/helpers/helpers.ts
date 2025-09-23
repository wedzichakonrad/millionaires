import { SingleChart } from '../../services/ask-audience-chart.service';
import { Answer } from '../types/types';

export const decodeHTMLEntities = (text: string) => {
    const parser = new DOMParser();
    const decodedStr = parser.parseFromString(text, "text/html").documentElement.textContent;
    return decodedStr;
}

export const shuffleArray = (a: any, b: any) => {
    a = Math.round(Math.random() * (10 - 1) + 1);
    b = Math.round(Math.random() * (10 - 1) + 1);
    return a - b;
}

export const sortByLetter = (a: Answer | SingleChart, b: Answer | SingleChart) => a.letter.localeCompare(b.letter);

export const formatPriceValue = (price: string) => {
    if (Number(price) / 1000 < 1) {
        return price;
    }

    const priceArr = price.toString().split('').reverse();
    const mappedPrices = priceArr.map((integer, index) => {
        if ((index + 1) % 3 === 0 && index !== priceArr.length - 1) {
            return `${integer}.`;
        }
        return integer;
    });

    return mappedPrices.join('').split('').reverse();
};