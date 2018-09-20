//Main page
import React, { Component } from 'react';
import Menu2 from '../components/Menu2';
import Header from '../components/Header';

class Edit extends Component {
	constructor(props) {
			super(props);
			this.state = {currentTab: "Update Book"};
			this.tabClick = this.tabClick.bind(this);
	}

	tabClick(ind) {
    //console.log('Wrapper: Click happened: ' + ind);
    	this.setState({currentTab: ind});
  	}
	render() {
		return (
		  <div className = 'rootDiv'>
		  		<Header></Header>
			    <Menu2 chosenTab={this.state.currentTab} clickEvent={this.tabClick}></Menu2>
			    <div className="book">
			    	<div id="form_content">
						<form action="/editbook" method="POST">
							<input type = "text" placeholder="Book key" name="ekey"/>
							<input type = "text" placeholder="Book title" name="etitle"/>
							<input type = "text" placeholder="Book author" name="eauthor"/>
							<input type = "text" placeholder="Published date" name="edate"/>
							<textarea id="bdesc" placeholder="Description"
								rows="7" name="desc"></textarea>
							<button type="submit"> Edit book </button>
						</form>
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
			    		padding: 20px 10px 10px;
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
					form {
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
						 margin: 3px auto;
					}
		    	`}</style>
		  </div>
  		);//end of return
	} //end of render
} //end of component

export default Edit;