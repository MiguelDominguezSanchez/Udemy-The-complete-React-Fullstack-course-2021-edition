import { MOVIES_LIST, MOVIE_DATA } from '../types'

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

export const movieData = () => {
	return {
		type: 'MOVIE_DATA',
		payload: {
			id: 1,
			name: 'Pulp Fiction',
			actors: ['Travolta', 'Thurman'],
			year: 1990,
			director: 'Tarantino',
		},
	}
}
