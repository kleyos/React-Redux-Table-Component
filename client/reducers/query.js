function query(state={}, action){

	switch(action.type){
		case 'FILTERING_QUERY':
			const { field, value } = action
			return Object.assign({ }, state, { filtering: { field, value } })
		case 'SORTING_QUERY':
			const { direction } = action
			return Object.assign({ }, state, { sorting: {
				field: action.field, direction
			}})
		case 'SELECTING_ROW_QUERY':
			const { row } = action
			return Object.assign({ }, state, { selecting: { row }})
		case 'PAGING_QUERY':
			const { numberPage } = action
			return Object.assign({ }, state, { paging: numberPage })

		default:
			return state
	}
}

export default query