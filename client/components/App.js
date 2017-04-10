
import { bindActionCreators } from 'redux'
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App
