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

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.use(bodyParser.urlencoded({extended: true}))

  server.post('/addbook', (req, res) => {
    
    //console.log(req.body)
    var newBook = {
            key: "",
            title: req.body.title,
            author: req.body.author,
            date: req.body.date,
            desc: req.body.desc
    }
    console.log("New added book: " + newBook);
    
    var bookKey = fire.database().ref('books/').push(newBook).key;
    fire.database().ref('books/' + bookKey + '/key').set(bookKey);
    //fs.writeFile('./static/book.txt', JSON.stringify(req.body))
    res.redirect('/')
  })

  server.post('/editbook', (req, res) => {
    
    console.log("Editing book: " + req.body);
    console.log("Key of edited book: " + req.body.ekey);
    if (req.body.ekey != "") {
        if(req.body.etitle != ""){
           fire.database().ref('books/' + req.body.ekey + '/title').set(req.body.etitle);
       }  
       if(req.body.eauthor != ""){
           fire.database().ref('books/' + req.body.ekey + '/author').set(req.body.eauthor);
       }  
       if(req.body.edate != ""){
           fire.database().ref('books/' + req.body.ekey + '/date').set(req.body.edate);
       } 
       if(req.body.desc != ""){
           fire.database().ref('books/' + req.body.ekey + '/desc').set(req.body.desc);
       }    
    }
    res.redirect('/')
  })

  server.post('/deletebook', (req, res) => {
    
    console.log("Key of edited book: " + req.body.dkey);
    if (req.body.dkey != "") {
        fire.database().ref('books/' + req.body.dkey).remove();      
    }
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