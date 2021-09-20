import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../store/actions'

import { Spinner, Button } from 'react-bootstrap'
import Masonry from 'react-masonry-css'
import Moment from 'react-moment'
import { LinkContainer } from 'react-router-bootstrap'

const HomePost = () => {
	const homePosts = useSelector((state) => state.posts)
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		dispatch(getPosts({}, 1, 'desc', 6))
	}, [dispatch])

	const loadMorePost = () => {
		const page = homePosts.page + 1
		setLoading(true)
		dispatch(getPosts(homePosts, page, 'desc', 6)).then(() => {
			setLoading(false)
		})
	}

	return (
		<>
			<Masonry
				breakpointCols={3}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'
			>
				{homePosts.posts
					? homePosts.posts.map((item) => <div key={item.id}>a</div>)
					: null}
			</Masonry>

			{loading ? (
				<div style={{ textAlign: 'center' }}>
					<Spinner animation='border' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</Spinner>
				</div>
			) : null}

			{!homePosts.end & !loading ? (
				<Button variant='outline-dark' onClick={() => loadMorePost()}>
					Load more posts
				</Button>
			) : null}
		</>
	)
}

export default HomePost
