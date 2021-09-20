import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../store/actions'

import { Spinner, Button } from 'react-bootstrap'

const HomePost = () => {
	const homePost = useSelector((state) => state.posts)
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		dispatch(getPosts({}, 1, 'desc', 6))
	}, [dispatch])

	const loadMorePost = () => {
		const page = homePost.page + 1
		setLoading(true)
		dispatch(getPosts(homePost, page, 'desc', 6)).then(() => {
			setLoading(false)
		})
	}

	return (
		<>
			{loading ? (
				<div style={{ textAlign: 'center' }}>
					<Spinner animation='border' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</Spinner>
				</div>
			) : null}

			{!homePost.end & !loading ? (
				<Button variant='outline-dark' onClick={() => loadMorePost()}>
					Load more posts
				</Button>
			) : null}
		</>
	)
}

export default HomePost
