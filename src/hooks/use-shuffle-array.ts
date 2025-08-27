export const useShuffleArray = (a: string | number| undefined, b: string | number | undefined) => {
    a = Math.round(Math.random() * (10 - 1) + 1);
    b = Math.round(Math.random() * (10 - 1) + 1);
    return a - b;
}