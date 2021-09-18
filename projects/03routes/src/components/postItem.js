import React from 'react'

const PostItem = (props) => {
	console.log(props)
	return <>{props.match.params.id}</>
}

export default PostItem
