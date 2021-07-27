const express = require('express')
const app = express()
const port = 8000

main.get('/', (req, res) => {
  res.send('Hello ayman!')
})

main.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})