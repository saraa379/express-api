//Main page
import React, { Component } from 'react';
import Menu2 from '../components/Menu2';
import Header from '../components/Header';
import fire from '../components/fire';

class Create extends Component {
	constructor(props) {
			super(props);
			this.state = {currentTab: "Add book", 
						  bTitle: "",
						  bAuthor: "",
						  bDate: "",
						  bDesc: ""
			};
			this.tabClick = this.tabClick.bind(this);
			this.handleClick = this.handleClick.bind(this);
			this.handleChange = this.handleChange.bind(this);
			this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
			this.handleChangeDate = this.handleChangeDate.bind(this);
			this.handleChangeDesc = this.handleChangeDesc.bind(this);
	}

	tabClick(ind) {
    //console.log('Wrapper: Click happened: ' + ind);
    	this.setState({currentTab: ind});
  	}
  	handleClick() {
    	//console.log('Wrapper: Click happened: ' + ind);
    	//this.setState({currentTab: ind});
    	var newBook = {
            key: "",
            title: this.state.bTitle,
            author: this.state.bAuthor,
            date: this.state.bDate,
            desc: this.state.bDesc
	    }
	    console.log("New added book: " + newBook);
    
	    var bookKey = fire.database().ref('books/').push(newBook).key;
	    fire.database().ref('books/' + bookKey + '/key').set(bookKey);
  	}
  	handleChangeAuthor(event) {
			this.setState({bAuthor: event.target.value});
	}
	handleChange(event) {
			this.setState({bTitle: event.target.value});
	}
	handleChangeDate(event) {
			this.setState({bDate: event.target.value});
	}
	handleChangeDesc(event) {
			this.setState({bDesc: event.target.value});
	}
	render() {
		return (
		  <div className = 'rootDiv'>
		  		<Header></Header>
			    <Menu2 chosenTab={this.state.currentTab} clickEvent={this.tabClick}></Menu2>
			    <div className="book">
			    	<div id="form_content">
						<div className = "form">
							<input type="text" placeholder="Book title" value={this.state.bTitle} onChange={this.handleChange} />
							<input type = "text" placeholder="Book author" value={this.state.bAuthor} onChange={this.handleChangeAuthor}/>
							<input type = "text" placeholder="Published date" value={this.state.bDate} onChange={this.handleChangeDate}/>
							<textarea id="bdesc" placeholder="Description"
								rows="7" value={this.state.bDesc} onChange={this.handleChangeDesc}></textarea>
							<button onClick={this.handleClick}> Add book </button>
						</div>

 					</div>//end of form content
			    </div>
			    
			    <style global jsx>{`
			      * {
			    		box-sizing: border-box;
			    		margin: 0;
		  			 	padding: 0;
			    	}
			      html, body {
			      	 height: 100%;
			      	 background: #202020;
			      	 width: 100%;
		  			 font-family: sans-serif;
		  			 min-width: 200px;
			      }
			      body {
			      	 background-image: 
						url('/static/book1.jpg');
						background-position: center;
						background-repeat: no-repeat;
						background-size: cover;
			      }
			      .rootDiv {
			      		height: 100%;
			      		width: 100%;
			      }
			      .title {
			    		height: 200px;
			    		display: flex;
			    		flex-flow: column wrap;
			    		align-items: center;
			    	}
			    	h1 {
			    		text-align: center;
			    		align-self: center;
			    		display: inline;
			    		margin: auto;
			    		background-color: black;
			    		text-transform: uppercase;
			    		color: white;
			    		padding: 5px 10px 5px 10px;
			    		opacity: 0.5;
			    	}
			    	nav {
			    		height: 45px;
			    		background-color: #444444;
			    		display: flex;
			    		flex-flow: row nowrap;
			    		align-items: center;
			    		justify-content: center;
			    		margin-bottom: 30px;
			    	}
			    	a {
			    		padding-right: 10px;
			    		padding-left: 10px;
			    		padding-top: 13px;
			    		padding-bottom: 13px;
			    		text-decoration: none;
						outline: none;
						color: white;
			    	}
			    	a:hover {
			    		background-color: grey;
			    	}
			    	.active {
			    		background-color: grey;
			    	}
			    	.bookList {
			    		color: white;
			    		width: 100%;
			    		display: flex;
			    		flex-flow: column nowrap;
			    		justify-content: center;
			    		align-items; center;
			    		margin-top: 30px;
			    		margin-bottom: 30px;
			    	}
			    	.book {
			    		background-color: black;
			    		opacity: 0.7;
			    		margin: 10px;
			    		padding: 20px 10px 20px 10px;
			    		width: 80%;
			    		align-self: center;
			    		margin: auto;
			    	}
			    	.book p {
			    		padding-bottom: 5px;
			    	}
			    	#form_content {
						padding: 20px;
					}
					input {
						 outline: none;
						 transition: .2s all linear;
						 display: flex;
						 padding: 8px;
						 width: 100%;
						 max-width: 500px;
						 margin: 5px auto;
					}
					textarea {
						 outline: none;
						 transition: .2s all linear;
						 display: flex;
						 padding: 8px;
						 width: 100%;
						 margin: 5px auto;
						 max-width: 500px;
					}
					.form {
						display: flex;
						flex-flow: column wrap;
						justify-content: center;
					}
					button {
						 color: black;
						 border-radius: 5px;
						 font-size: 16px;
						 line-height: 100%;
						 padding: 5px 10px 5px 10px;
						 width: 8em;
						 margin: 5px auto;
					}
		    	`}</style>
		  </div>
  		);//end of return
	} //end of render
} //end of component

export default Create;