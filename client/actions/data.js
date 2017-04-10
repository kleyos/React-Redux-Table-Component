
export function fetchData(data) {
	return (dispatch) => {
		dispatch({
			type: 'FETCH_DATA', 
			data
		})
	}
}