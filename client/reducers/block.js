function block(state=[0], action){

	switch(action.type){
		case 'ADD_BLOCK':
			return [...state, action.index]
		default:
			return state
	}
}

export default block