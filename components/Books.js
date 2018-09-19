
//https://books.google.com/
//<img src={require(book.volumeInfo.imageLinks.smallThumbnail)} alt="logo"/>

import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class Books extends Component {
	constructor(props) {
			super(props);
			this.state = {books: []};
	}


	componentWillMount() {

	    this.setState({
	      books: this.props.bookData
	    })
    }

	render() {
		var bookArray = this.state.books;
		var books = [{id: 1, title: "lala"}, {id: 2, title: "ssss"}]
		//console.log("Comp book recieved: " + bookArray);

		const listItems = bookArray.map(function(book) {
			console.log("Individual book info: " + book.id);
			
            return <div className="book" key={book.id}>

            			<p>Title: {book.volumeInfo.title}</p>
                        <p>Author: {book.volumeInfo.authors}</p>
                        <p>Published date: {book.volumeInfo.publishedDate}</p>
                        <p>Description: {book.volumeInfo.description}</p> 
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