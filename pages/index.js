//Main page
import React, { Component } from 'react';
import Menu2 from '../components/Menu2';
import Header from '../components/Header';
import Books from '../components/Books';
//import Page from '../components/page';

class Index extends Component {
	constructor(props) {
			super(props);
			this.state = {currentTab: "Books"};

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
			    <Books></Books>
			    
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
		    	`}</style>
		  </div>
  		);//end of return
	} //end of render
} //end of component

export default Index;




