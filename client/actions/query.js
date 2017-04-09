import store from '../store'

export function filtering(field, value) {
	store.dispatch({ type: 'FILTERING_QUERY', field, value })
}

export function sorting(field, direction) {
	store.dispatch({ type: 'SORTING_QUERY', field, direction })
}

export function selecting(row) {
	store.dispatch({ type: 'SELECTING_ROW_QUERY', row })
}

export function paginating(numberPage) {
	store.dispatch({ type: 'PAGING_QUERY', numberPage })
}