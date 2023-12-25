const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

const magic8BallResponses = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful"
]

//Greetings
app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`)
})

//Tip Percentage
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Total: $${req.params.total}, Tip Percentage: ${req.params.tipPercentage}%, Tip Amount: $${req.params.total * (req.params.tipPercentage / 100)}`)
})

//Magic 8 Ball
app.get('/magic/:question', (req, res) => {
    const question = req.params.question.replace(/%20/g, ' ')
    const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)]
    res.send(`<h1>Question: ${question}</h1>
    <h1>Magic 8 Ball Response: ${randomResponse}</h1>`)
})

app.listen(PORT, () => {
    console.log(`The PORT at ${PORT} is open`)
})



