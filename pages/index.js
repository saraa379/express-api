// This is the Link API
/*
import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
	  <a style={{ fontSize: 20 }}>About Page</a>
	</Link>
    <p>Hello Next.js</p>
  </div>
)
export default Index*/

import Header from '../components/Header'
import Layout from '../components/MyLayout.js'

const rootDivStyle = {
  backgroundColor: 'blue',
  boxSize: 'border-box',
  margin: 0,
  padding: 0
}

export default () => (
  <div style={rootDivStyle}>
	    <Header />
	    <p>Hello Next.js</p>
	    
	    <style global jsx>{`
	      html, body {
	      	 height: 100%;
	      	 background: black;
	      	 width: 100%;
	      	 box-sizing: border-box;
	      	 margin: 0;
  			 padding: 0;
  			 font-family: sans-serif;
  			 min-width: 200px;
	      }
    	`}</style>
  </div>
)

