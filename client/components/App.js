import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import Main from './Main'

function mapStateToProps(state) {
	return {
		block: state.block,
		data: state.data,
		query: state.query
	}
}

const App = connect(mapStateToProps, actionCreators)(Main);

export default App
