import React, { useReducer } from 'react'

const Reducer = () => {
	const [state, dispatch] = useReducer((state, action) => {
		if (action === -1) {
			return state - 1
		}
		return state + 1
	}, 0)
	return (
		<div className='container'>
			<div>Current state: {state}</div>
			<button onClick={() => dispatch(1)}>Increment</button>
			<button onClick={() => dispatch(-1)}>Decrement</button>
		</div>
	)
}

export default Reducer
