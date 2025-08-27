export const decodeHTMLEntities = (text: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
}

export const shuffleArray = (a: string | number| undefined, b: string | number | undefined) => {
    a = Math.round(Math.random() * (10 - 1) + 1);
    b = Math.round(Math.random() * (10 - 1) + 1);
    return a - b;
}