import store from '../store'

export function fetchData(data) {
	store.dispatch({type: 'FETCH_DATA', data})
}