//
import Header from '../components/Header'
import Layout from '../components/MyLayout.js'

const rootDivStyle = {
  backgroundColor: 'blue',
  boxSize: 'border-box',
  margin: 0,
  padding: 0
}

import Link from 'next/link'

const Index = () => (
  <div style={rootDivStyle}>
	    <Header />
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
				linear-gradient(
				    rgba(0, 0, 24, 0.5),
				    rgba(0, 0, 24, 0.5)
				    ), url('/static/spa15.jpg');
				background-position: center 70%;
				background-repeat: no-repeat;
				background-size: cover;
	      }
    	`}</style>
  </div>
)
export default Index




