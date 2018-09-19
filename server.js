const express = require('express')
const next = require('next')
const bodyParser= require('body-parser')
var fs = require('fs');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.use(bodyParser.urlencoded({extended: true}))

  server.post('/addbook', (req, res) => {
    console.log('Hellooooooooooooooooo!')
    console.log(req.body)
    fs.writeFile('./static/book.txt', JSON.stringify(req.body))
    res.redirect('/')
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})