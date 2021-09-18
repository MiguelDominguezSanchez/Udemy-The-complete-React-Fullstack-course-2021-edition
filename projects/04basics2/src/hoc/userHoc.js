import React from 'react'

const userHoc = (WrappedComponent, WrappedComponent2, arg1) => {
	return (props) => (
		<>
			{arg1}
			<WrappedComponent2 />
			<WrappedComponent {...props} />
		</>
	)
}

export default userHoc
