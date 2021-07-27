const express = require('express')
const app = express()
const port = 8000

main.get('/', (req, res) => {
  res.send('Hello ayman!')
})

main.get('/ribath', (req, res) => {
  res.send('Hello ribath!')
})

main.get('/adib', (req, res) => {
  res.send('Hello adib!')
})


main.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})