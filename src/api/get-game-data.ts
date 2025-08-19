export const getGameData = async () => {
    const apiUrl = 'https://opentdb.com/api.php?amount=15&type=multiple';
    return await fetch(apiUrl).then(res => res.json())
        .then(data => {
                if (data.results) {
                    return data.results.map((element: any) => {

                        const question = element.question;
                        const answers = [
                            { content: element.correct_answer, isCorrect: true },
                            ...element.incorrect_answers.map((answer: any) => {
                                return { content: answer, isCorrect: false}
                            }),
                        ]

                        return {question, answers};
                    })
                }
            }
        ).catch(err => console.log(err))
}
