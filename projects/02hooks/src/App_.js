import React, { useState, useEffect } from 'react'
import Posts from './posts'

const App = ({ initialCount }) => {
	const [state, setState] = useState({
		count: initialCount,
		user: 'Francis',
	})
	let [posts, setPosts] = useState([
		{
			name: 'Super awesome post',
			body: 'The content of the post',
		},
		{
			name: 'JS is great',
			body: 'Something else',
		},
	])

	const restOne = () => {
		setState({
			...state,
			count: state.count - 1,
		})
	}

	const addOnePost = () => {
		let newPost = {
			name: 'PHP is still awesome',
			body: 'something about PHP',
		}

		setPosts([...posts, newPost])
	}

	const removePosts = () => {
		setPosts([])
	}

	useEffect(() => {
		// console.log('change on state')
	}, [state])

	useEffect(() => {
		// console.log('change on posts')
	}, [posts])

	useEffect(() => {
		console.log('MOUNTED')
	}, [])

	return (
		<>
			<h1>{state.user}</h1>
			<h3>Count: {state.count}</h3>
			<button
				onClick={() =>
					setState({
						...state,
						count: state.count + 1,
					})
				}
			>
				Add one +1
			</button>
			<button onClick={restOne}>Rest one -1</button>
			<button onClick={removePosts}>remove posts</button>
			<hr />

			{posts.map((item, i) => (
				<Posts item={item} key={i} />
			))}

			<button onClick={addOnePost}>Add on more</button>
		</>
	)
}

export default App
