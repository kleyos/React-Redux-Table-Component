import _ from 'lodash'
import React from 'react'

class Table extends React.Component {
	render() {
		const { data, query, filtering, sorting, selecting, paginating } = this.props;
		const qFiltering = query.filtering
		const qSorting = query.sorting;
		const qSelecting = query.selecting;
		const qPaging = query.paging;
		const pagingSize = 10;
		if (!data || data.length == 0) {
			return (<div className='container'>Нет данных</div>);
		}
		if (!qPaging || qPaging == 0) {
			paginating(1);
		}

		const columns = Object.keys(data[0] || [])
		const arrow = <i
			className={`icon-sort glyphicon glyphicon-triangle-${qSorting && qSorting.direction === 'asc'
				? 'bottom'
				: 'top'
			}`}
			aria-hidden="true">
		</i>
		const thead = columns
			? columns.map((item, index) => <th
					key={ index }
					onClick={()=> sorting(item, qSorting && qSorting.direction === 'asc' ? 'desc' : 'asc')}>
					{ arrow }
					{ item }
				</th>)
			: null
		const thfilter = columns
			? columns
				.map((item, index) => <th key={ index }><input type="text"
					key={ index }
					className='form-control'
					value={ qFiltering && qFiltering.field == item && qFiltering.value || '' }
					onChange={ (e) => filtering(item, e.target.value) }/>
					</th>)
			: null

		const td = (nameCol, row, i) => <td key={i}>
				{ JSON.stringify(row[nameCol], null, '\t').replace(/"/g, '') }
			</td>

		const filteringData = data
			.filter(row => {
				if (!qFiltering || !qFiltering.value || !row) {
					return true
				}
				const regex = new RegExp(qFiltering.value, 'gi');
				return row[qFiltering.field].toString().match(regex)
			})
			.sort((a,b) => {
				if (!qSorting) { return undefined}
				return qSorting.direction == 'asc'
					? +(a[qSorting.field] > b[qSorting.field]) || +(a[qSorting.field] === b[qSorting.field]) - 1
					: +(a[qSorting.field] < b[qSorting.field]) || +(a[qSorting.field] === b[qSorting.field]) - 1
			})

		const tbody = filteringData
			? filteringData
				.filter((row, index) => {
					if (!qPaging || qPaging < 1) {
						return true
					}
					return (qPaging-1)*pagingSize <= index && qPaging*pagingSize > index
				})
				.map((row, index) => <tr
					key={index}
					onClick={ () => selecting(row)}>
						{ columns.map( (nameCol, i) =>
							td(nameCol, row, `${index}_${i}`)) }
					</tr>)
			: null

		const selectedRow = qSelecting && qSelecting.row
			? <div className='well'>{`You selected:
					${ JSON.stringify(qSelecting.row, null, '\t').replace(/"/g, '')}`}
				</div>
			: <div className='well'>{`You didn't select row`}</div>

		const countPages = filteringData.length % pagingSize > 0
			? Math.ceil(filteringData.length/pagingSize) + 1
			: Math.ceil(filteringData.length/pagingSize)

		const pages = _.range(1,countPages)
			.map((item, index) => <button type="button" className="btn btn-default" key={index}
				onClick={() => paginating(item) }>{ item }
			</button>)

		return (<div className='container'>
			{pages}
			<table className='table table-hover table-bordered table-condensed'>
				<thead className='well'>
					<tr>{ thfilter }</tr>
					<tr>{ thead }</tr>
				</thead>
				<tbody>{ tbody }</tbody>
			</table>
			{ selectedRow }
		</div>);
	}
}
export default Table