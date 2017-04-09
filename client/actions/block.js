import store from '../store'

export function addBlock(index) {
	store.dispatch({ type: 'ADD_BLOCK', index })
}