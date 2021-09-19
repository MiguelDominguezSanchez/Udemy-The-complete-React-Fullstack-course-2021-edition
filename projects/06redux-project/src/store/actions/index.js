export const moviesList = () => {
	return {
		type: 'MOVIES_LIST',
		payload: [
			{ id: 1, name: 'Pulp fiction' },
			{ id: 2, name: 'Pacific rim' },
			{ id: 3, name: 'Rambo' },
		],
	}
}
