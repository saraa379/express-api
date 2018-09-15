import Link from 'next/link';
import React, {Component} from 'react';
import {connect} from 'react-redux';


const Menu = () => (
	
    <div>
    	<div className='menu'>
    		<Link href="/">
          		<a className='active'>Books</a>
        	</Link>
        	<Link href="/create">
          		<a>Add book</a>
        	</Link>
        	<Link href="/edit">
          		<a>Edit book</a>
        	</Link>
        	<Link href="/delete">
          		<a>Delete book</a>
        	</Link>
    	</div>

    	<style jsx>{`
	    	
	    	.menu {
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
)

export default Menu
/*
let mapStateToProps = state => {
	return {
		currentTab: state.currentTab
	};
}

export default connect(mapStateToProps)(History);
*/


/*
		<Link href="/">
          <a style={linkStyle}>Home</a>
        
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
*/