import Head from 'next/head';

const Header = () => (
	<div>
	    <Head>
			<meta charset="UTF-8" />
			
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
			<title>Lab 1 - Express app</title>
			<script src="https://www.gstatic.com/firebasejs/4.10.1/firebase.js"></script>
		</Head>
		<div className = 'title'>
			<h1>Google Books API</h1>
		</div>
	</div>
)

export default Header