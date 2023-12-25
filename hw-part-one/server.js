const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`)
})

app.listen(PORT, () => {
    console.log(`The PORT at ${PORT} is open`)
})