import Head from 'next/head';
import Menu from '../components/Menu'
//import Page from '../components/page';

const Index = () => (
  <div className = 'rootDiv'>
  		<Head>
  			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  			<title>Lab 1 - Express app</title>
  		</Head>
  		<div className = 'title'>
    		<h1>Google Books API</h1>
    	</div>
	    <Menu />
	    <p>Hello Next.js</p>
	    
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
    	`}</style>
  </div>
)
export default Index




