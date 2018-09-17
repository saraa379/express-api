import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class Books extends Component {
	constructor(props) {
			super(props);
			this.state = {books: []};
	}

	static async getInitialProps() {
	    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
		const data = await res.json();

		console.log(`Show data fetched. Count: ${data.length}`);

		return {
		    data
  		}
	}

	componentWillMount() {
	    this.setState({
	      books: this.props.data
	    })
    }

	render() {
			
	    return (
	        <div>
	            <p>Here comes books</p>
	            
	        </div>
	    );//end of return
	 } //end of render
} //end of component



export default Books;