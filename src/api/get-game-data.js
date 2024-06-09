export const getGameData = async () => {
    return await fetch('https://opentdb.com/api.php?amount=15&type=multiple').then(res => res.json())
        .then(data => {
                if (data.results) {
                    return data.results.map(element => {

                        const question = element.question;
                        const answers = [
                            { content: element.correct_answer, isCorrect: true },
                            ...element.incorrect_answers.map(answer => {
                                return { content: answer, isCorrect: false}
                            }),
                        ]

                        return {question, answers};
                    })
                }
            }
        ).catch(err => console.log(err))
}
