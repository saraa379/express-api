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

  
  server.use(bodyParser.urlencoded({extended: false}))
  server.use(bodyParser.json())


  server.post('/addClicked', (req, res) => {
      //var obj = JSON.parse(req.body);
      //console.log("Book is recieved" + obj.title);
      //res.send('"hello!"');
      console.log("Post request is recived: " + req.body.title);

      var newBook = {
            key: "",
            title: req.body.title,
            author: req.body.author,
            date: req.body.date,
            desc: req.body.desc
    }
    console.log("New added book: " + newBook.title);
    console.log("New added book: " + newBook.author);
    console.log("New added book: " + newBook.date);
    console.log("New added book: " + newBook.desc);
   
    var bookKey = fire.database().ref('books/').push(newBook).key;
    fire.database().ref('books/' + bookKey + '/key').set(bookKey);

    res.send({ success: true });
    
  })

  server.post('/editbook', (req, res) => {
      console.log("Post request is recived: " + req.body.key);

      if (req.body.key != "") {
           console.log("Key is not empty");
           if(req.body.title != ""){
               fire.database().ref('books/' + req.body.key + '/title').set(req.body.title);
           } 
           if(req.body.author != ""){
               fire.database().ref('books/' + req.body.key + '/author').set(req.body.author);
           } 
           if(req.body.date != ""){
               fire.database().ref('books/' + req.body.key + '/date').set(req.body.date);
           }  
           if(req.body.desc != ""){
               fire.database().ref('books/' + req.body.key + '/desc').set(req.body.desc);
           }   
            
      } else {
        console.log("Key is empty");
      }

      res.send({ success: true });
    
  })

  server.post('/deletebook', (req, res) => {

    if (req.body.key != "") {
           console.log("Key is not empty");
            fire.database().ref('books/' + req.body.key).remove();       
    } else {
        console.log("Key is empty");
    }

    res.send({ success: true });
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