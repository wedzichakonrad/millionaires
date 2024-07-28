export const formatPriceValue = price => {
    if (price/1000 < 1) {
        return price;
    }

    const priceArr = price.toString().split('').reverse();
    const mappedPrices = priceArr.map((integer,index) => {
        if ((index + 1) % 3 === 0 && index !== priceArr.length - 1) {
            return `${integer},`
        }
        return integer;
    })

    return mappedPrices.join('').split('').reverse()
}

export const shuffleArray = (a, b) => {
    a = Math.round(Math.random() * (10 - 1) + 1);
    b = Math.round(Math.random() * (10 - 1) + 1);
    return a - b;
}