const express = require('express')
const app = express()
const PORT = process.env.PORT || 1999
let bottles = 99;

app.get('/', (req, res) => {
    res.send(`
    ${bottles} Bottles of beer on the wall<br>
    <a href="/${bottles - 1}">Take one down, pass it around</a>
    `)
})

app.get('/:number_of_bottles', (req, res) => {
    let link = '';
    if (req.params.number_of_bottles > 0) {
        link = `<a href="/${req.params.number_of_bottles - 1}">Take one down, pass it around</a>`;
    }
    res.send(`
    ${req.params.number_of_bottles} Bottles of beer on the wall<br>
    ${link}<br>
    <a href="/">Start over</a>
    `)
})


app.listen(PORT, () => {
    console.log(`first app listening on port ${PORT}!`)
})