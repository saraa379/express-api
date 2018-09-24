const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
//import firebase from 'firebase'
const firebase = require('firebase')
//import fire from './components/fire';
//var fs = require('fs');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  var config = {
      apiKey: "AIzaSyDKKMjqyvzJcmO4c2y2rG_8ZAB6UANPMoc",
      authDomain: "express-app-6eaa3.firebaseapp.com",
      databaseURL: "https://express-app-6eaa3.firebaseio.com",
      projectId: "express-app-6eaa3",
      storageBucket: "express-app-6eaa3.appspot.com",
      messagingSenderId: "121493773188"
    };
    var fire = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

  

  server.use(bodyParser.urlencoded({extended: true}))

  server.post('/addbook', (req, res) => {
    
    
  })

  server.post('/editbook', (req, res) => {
    
    
  })

  server.post('/deletebook', (req, res) => {
    
  })

  server.get('*', (req, res) => {
    return handle(req, res)
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