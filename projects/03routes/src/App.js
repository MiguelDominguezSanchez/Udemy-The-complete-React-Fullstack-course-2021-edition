import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/home'
import Posts from './components/posts'
import Profile from './components/profile'

const App = () => {
	return (
		<BrowserRouter>
			<header>header</header>
			<Route path='/' exact component={Home} />
			<Route path='/posts' component={Posts} />
			<Route path='/profile' component={Profile} />
		</BrowserRouter>
	)
}

export default App
