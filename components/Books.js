
//https://books.google.com/
//<img src={require(book.volumeInfo.imageLinks.smallThumbnail)} alt="logo"/>

import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import fire from '../components/fire';
//const writeFileP = require("write-file-p");

class Books extends Component {
	constructor(props) {
			super(props);
			this.state = {books: []};
			this.fbCallback = this.fbCallback.bind(this);
	}


	componentWillMount() {

		fire.database().ref('books/').on('value', this.fbCallback);//end of fire
/*
	    this.setState({
	      books: this.props.bookData
	    })*/

	   /* fire.database().ref('books/').on('value', function(snapshot) {
				var dataArray = [];
				snapshot.forEach( child => {

					var bookTemp = child.val();
					dataArray.push(bookTemp);
				})//end of foreach
				console.log("books from db: " + dataArray);
				
			})//end of db.ref*/

	   
    }//end of will mount

    fbCallback = function(snapshot) {
		var that = this;
		var dataArray = [];
		snapshot.forEach( child => {

			var bookTemp = child.val();
			dataArray.unshift(bookTemp);
		})//end of foreach
		that.setState({
				books: dataArray
		});
	}

    componentDidMount() {
		//var book = this.readTextFile('./static/book.txt');
		//console.log("Book data: " + book);
	}



	render() {
		var bookArray = this.state.books;
		//console.log("Comp book recieved: " + bookArray);

		const listItems = bookArray.map(function(book) {
			//console.log("Individual book info: " + book.id);
			
            return <div className="book" key={book.id}>

            			<p>Title: {book.title}</p>
                        <p>Author: {book.author}</p>
                        <p>Published date: {book.date}</p>
                        <p>Description: {book.desc}</p> 
                    </div>;

          
      	});

      	return (
        	<div className="bookList">
            	{listItems}
        	</div>
      	);//end of return

		/*
			
	    return (
	        <div>
	            <p>Here comes books</p>
	            <div>{this.state.books}</div>
	        </div>
	    );*///end of return
	 } //end of render
} //end of component



export default Books;