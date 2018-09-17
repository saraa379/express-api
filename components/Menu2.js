import React, { Component } from 'react';
import Link from 'next/link';

class Menu2 extends Component {
	constructor(props) {
			super(props);
	}

	render() {
			const menuItemsArray = ['Books', 'Add book', 'Update Book', 'Delete book'];
			const currentTab = this.props.chosenTab;
			const funcClick = this.props.clickEvent;
			const listItems = menuItemsArray.map(function(tab) {
          if (tab == currentTab) {
          	if(tab == 'Books'){
          		return <Link href="/" key={tab}>
			          		<a className='active'>Books</a>
			        	</Link>
          	} else if (tab == 'Add book') {
          		return <Link href="/create" key={tab}>
			          		<a className='active'>Add book</a>
			        	</Link>
          	} else if (tab == 'Update Book') {
          		return <Link href="/edit" key={tab}>
			          		<a className='active'>Edit Book</a>
			        	</Link>
			} else if (tab == 'Delete book'){
				return <Link href="/delete" key={tab}>
			          		<a className='active'>Delete book</a>
			        	</Link>
			} 
          } else if (tab != currentTab){
            if(tab == 'Books'){
          		return <Link href="/" key={tab}>
			          		<a>Books</a>
			        	</Link>
          	} else if (tab == 'Add book') {
          		return <Link href="/create" key={tab}>
			          		<a>Add book</a>
			        	</Link>
          	} else if (tab == 'Update Book') {
          		return <Link href="/edit" key={tab}>
			          		<a>Edit book</a>
			        	</Link>
			} else if (tab == 'Delete book'){
				return <Link href="/delete" key={tab}>
			          		<a>Delete book</a>
			        	</Link>
			} 
          }//end of else
      });

      return (
      	<div>
	        <nav>
	            {listItems}
	        </nav>
        </div>
      );//end of return

	  } //end of render
} //end of component

export default Menu2;
