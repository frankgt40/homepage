import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
	<div style={{
	    background: '#f4f4f4',
	    paddingTop: '10px'
	}}>

	<ul style={{
	    listStyle: 'none',
	    display: 'flex',
	    justifyContent: 'space-evenly'
	}}>
	<li><Link to="/">Home</Link></li>
	<li><Link to="/about">About</Link></li>
	<li><Link to="/publications">Publications</Link></li>
	<li><Link to="/leetCode">Blogs</Link></li>
	</ul>
	</div>
)

export default Menu;
