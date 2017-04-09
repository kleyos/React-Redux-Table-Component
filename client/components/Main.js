import React from 'react'

import Data from './Data'
import Table from './Table'
import './App.css'



class Main extends React.Component {

	render() {
		const { block, addBlock } = this.props;
		const blocks = block
			.map((item) => <div key={item}>
					<Data {...this.props}/>
					<Table {...this.props}/>
			</div>)
		return (
			<div className='container'>
				{ blocks }
				<button type="button" className="btn btn-primary" onClick={() => addBlock(block.length)}>
					+ new block
				</button>

			</div>
			);
	}
}

export default Main
