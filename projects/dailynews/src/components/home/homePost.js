import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../store/actions'

const HomePost = () => {
	const homePost = useSelector((state) => state.posts)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPosts(page))
	}, [dispatch])

	return <>HomePost</>
}

export default HomePost
