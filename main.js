const express = require('express')
const app = express()
const port = 8000

main.get('/', (req, res) => {
  res.send('Hello ayman!')
})

main.get('/ribath', (req, res) => {
  res.send('Hello ribath!')
})

<<<<<<< HEAD
main.get('/rayed', (req, res) => {
  res.send('Hello rayed!')
})
=======
main.get('/adib', (req, res) => {
  res.send('Hello adib!')
})

>>>>>>> first

main.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})