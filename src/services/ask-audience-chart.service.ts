import { Answer, Question } from '../components/millionaires';

export type SingleChart = {
  letter: string,
  percent: number,
}

const maxPercentValue = 100;

const getRandomNumber = () => Math.round(Math.random() * 100)

const sortByCorrectAnswer = (a: Answer,b: Answer) => {
    if (a.isCorrect && !b.isCorrect) return -1;
    if (!a.isCorrect && b.isCorrect) return 1;
    return 0;
}

const findRandomPercentValues = () => {
  const calculatedPercents = [] as number[];

  while (calculatedPercents.length < 3) {
    const value = getRandomNumber();
    const tempSum = calculatedPercents.reduce((acc, cur) => acc + cur, 0) + value;

    if (tempSum <= maxPercentValue) {
      calculatedPercents.push(value);
    }
  }

  const currentSum = calculatedPercents.reduce((acc, cur) => acc + cur, 0);
  const missingPercent = maxPercentValue - currentSum;
  calculatedPercents.push(missingPercent);

  return calculatedPercents;
};

const getCharts = (currentQuestion: Question | undefined) => {
  const percentValues = findRandomPercentValues()

  const charts = [] as SingleChart[];

  const sortedAnswers = currentQuestion?.answers.sort(sortByCorrectAnswer)
  const sortedPercents = percentValues.sort((a,b) => b - a);

  for (const index in sortedAnswers) {
    const indexNum = Number(index);
    const currentAnswer = sortedAnswers[indexNum];
    
    const chart = {
      percent: sortedPercents[indexNum],
      letter: currentAnswer?.letter
    }
    charts.push(chart)
  }
  
  return charts;
}

export const AskAudienceChartService = {
  getCharts,
}