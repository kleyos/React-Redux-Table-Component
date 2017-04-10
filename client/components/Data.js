import React from 'react'



class Data extends React.Component {

	render() {
		const { fetchData } = this.props;
		const names = [
			{name: 'Big', id: 'todos'},
			{name: 'Small', id: 'users'},
			{name: 'Own', id: 'posts'}
		]
		const radioInputs = names.map( (item, index) =>
			<label className="btn-radio" key={ index }>
				<input type="radio"
					name="options"
					key={ index }
					id={item.id}
					onChange={() => loadData(item.id, fetchData)}/>
				{item.name}
				</label>
		)
		return (
			<div className='container'>
				<div className="btn-group">
					<label> Select dataset :</label>
					{radioInputs}
				</div>
			</div>
			)
	}
}

function loadData(id, func){
	fetch('https://jsonplaceholder.typicode.com/'+id)
	.then(r => r.json())
	.then(data => func(data))
	.catch( error => console.error(error))
}
export default Data