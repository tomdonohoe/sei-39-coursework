let scores = [
    {
        course: 'kiama',
        score: 80
    },
    {
        course: 'kiama',
        score: 90
    },   
    {
        course: 'kiama',
        score: 110
    },
    {
        course: 'calderwood',
        score: 80
    },
    {
        course: 'calderwood',
        score: 70
    },
    {
        course: 'calderwood',
        score: 90
    },
]

const result = scores
                   .filter(score => score.course == 'kiama')
                   .map(score => score.score)
                   .reduce( (acc, cVal) => acc + cVal)

console.log(
    result / 3
)