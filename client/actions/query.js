
export function filtering(field, value) {
	return{ type: 'FILTERING_QUERY', field, value }
}

export function sorting(field, direction) {
	return{ type: 'SORTING_QUERY', field, direction }
}

export function selecting(row) {
	return{ type: 'SELECTING_ROW_QUERY', row }
}

export function paginating(numberPage) {
	return{ type: 'PAGING_QUERY', numberPage }
}