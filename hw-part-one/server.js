const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Total: $${req.params.total}, Tip Percentage: ${req.params.tipPercentage}%, Tip Amount: $${req.params.total * (req.params.tipPercentage / 100)}`)
})



app.listen(PORT, () => {
    console.log(`The PORT at ${PORT} is open`)
})