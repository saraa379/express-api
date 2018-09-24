//Main page
import React, { Component } from 'react';
import Menu2 from '../components/Menu2';
import Header from '../components/Header';
import fire from '../components/fire';

class Edit extends Component {
	constructor(props) {
			super(props);
			this.state = {currentTab: "Update Book",
			    		  eKey: "",
						  eTitle: "",
						  eAuthor: "",
						  eDate: "",
						  eDesc: ""
			};
			this.tabClick = this.tabClick.bind(this);
			this.handleClick = this.handleClick.bind(this);
			this.handleChangeKey = this.handleChangeKey.bind(this);
			this.handleChangeTitle = this.handleChangeTitle.bind(this);
			this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
			this.handleChangeDate = this.handleChangeDate.bind(this);
			this.handleChangeDesc = this.handleChangeDesc.bind(this);
	}

	tabClick(ind) {
    //console.log('Wrapper: Click happened: ' + ind);
    	this.setState({currentTab: ind});
  	}

  	handleClick() {
  		if (this.state.eKey != "") {
	         console.log("Key is not empty");
	           if(this.state.eTitle != ""){
		           fire.database().ref('books/' + this.state.eKey + '/title').set(this.state.eTitle);
		       } 
		       if(this.state.eAuthor != ""){
		           fire.database().ref('books/' + this.state.eKey + '/author').set(this.state.eAuthor);
		       } 
		       if(this.state.eDate != ""){
		           fire.database().ref('books/' + this.state.eKey + '/date').set(this.state.eDate);
		       } 
		       if(this.state.eDesc != ""){
		           fire.database().ref('books/' + this.state.eKey + '/desc').set(this.state.eDesc);
		       }  
		        
	    } else {
	    	console.log("Key is empty");
	    }
    
  	}

  	handleChangeKey(event) {
			this.setState({eKey: event.target.value});
	}
	handleChangeTitle(event) {
			this.setState({eTitle: event.target.value});
	}
	handleChangeAuthor(event) {
			this.setState({eAuthor: event.target.value});
	}
	handleChangeDate(event) {
			this.setState({eDate: event.target.value});
	}
	handleChangeDesc(event) {
			this.setState({eDesc: event.target.value});
	}


	render() {
		return (
		  <div className = 'rootDiv'>
		  		<Header></Header>
			    <Menu2 chosenTab={this.state.currentTab} clickEvent={this.tabClick}></Menu2>
			    <div className="book">
			    	<div id="form_content">
						<div className = "form">
							<input type = "text" placeholder="Book key" value={this.state.eKey} onChange={this.handleChangeKey}/>
							<input type = "text" placeholder="Book title" value={this.state.eTitle} onChange={this.handleChangeTitle}/>
							<input type = "text" placeholder="Book author" value={this.state.eAuthor} onChange={this.handleChangeAuthor}/>
							<input type = "text" placeholder="Published date" value={this.state.eDate} onChange={this.handleChangeDate}/>
							<textarea id="bdesc" placeholder="Description"
								rows="7" value={this.state.eDesc} onChange={this.handleChangeDesc}></textarea>
							<button onClick={this.handleClick}> Edit book </button>
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
						 margin: 3px auto;
					}
		    	`}</style>
		  </div>
  		);//end of return
	} //end of render
} //end of component

export default Edit;