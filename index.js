const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false})


app.use(cors())
app.use(jsonParser)
app.use(urlencodedParser)

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.post('/login', (req, res) => {
  const username = 'hasan'
  const password = '123456'

  if (req.body.username != username) {
    res.status(401).json({status: 'error, username not found'})
  }

  if (req.body.password != password) {
    res.status(401).json({status: 'error, wrong password'})
  }

  res.json({status: 'success'})
  
})

app.listen(port, () => {
  console.log(`Example app listening at on port ${port}`)
})
