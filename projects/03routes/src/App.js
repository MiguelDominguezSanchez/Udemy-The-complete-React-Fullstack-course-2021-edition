import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Home from './components/home'
import Posts from './components/posts'
import Profile from './components/profile'

const App = () => {
	return (
		<BrowserRouter>
			<header>
				<Link to='/'>Home</Link> -<Link to='/posts'>Post</Link> -
				<Link
					to={{
						pathname: '/profile',
						hash: '#francis',
						search: '?true=enabled',
					}}
				>
					Profile
				</Link>
				<hr />
			</header>
			<Route path='/' exact component={Home} />
			<Route path='/posts' exact component={Posts} />
			<Route path='/profile' exact component={Profile} />
		</BrowserRouter>
	)
}

export default App
