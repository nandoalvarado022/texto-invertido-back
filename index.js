const express = require('express')
const { getInvertedText } = require('./utils/index')
var cors = require('cors')
const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send("hello, world!")
})

app.get('/echo', (req, res) => {
  if (!req.query.text) res.status(400).end()
  const prueba = req.query.text
  const text = getInvertedText(prueba)
  const palindrome = prueba == text
  res.json({
    text,
    palindrome
  })
})

const PORT = 80
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT)
})

module.exports = app