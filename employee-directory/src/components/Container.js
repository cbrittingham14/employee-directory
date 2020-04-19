import React, { Component } from 'react';
import employees from '../employees.json';
import Employee from './Employee';

class Container extends Component {
	text = '';
	state = {
		employees,
		filter: '',
		isSorted: false,
		shouldSort: false
	};

	clearButton;

	handleInputChange = e => {
		this.setState({
			filter: e.target.value
		});
	};

	clearSort = () => {
		this.setState({
			isSorted: false,
			shouldSort: false
		});
	};
	setReverseSort = () =>{
		this.clearButton = (<p />);
		if(this.state.shouldSort){
			this.clearButton = (
				<button type='submit' onClick={this.clearSort} className='btn-warning'>
				Clear Sort
				</button>
			);
		}
	};
	sortCategory = e => {

		e.preventDefault();
		this.setState({
			isSorted: !this.state.isSorted,
			shouldSort: true
		});

		this.setReverseSort();
	};
	render() {
		return(
			<div>
				<div className='row'>
					<div className='col'>
						<form className="form">
						<input
								value={this.state.filter}
								name="filter"
								onChange={this.handleInputChange}
								type="text"
								placeholder="Filter by Name"
							/>
						</form>
					</div>
					<div className='col'>
						<button type="submit" onClick={this.sortCategory} className="btn btn-success">
						Sort
						</button>
					</div>
					<div className='col'>
						{this.clearButton}
					</div>
				</div>
				<div className='row'> 
					<div className='col'>
						<Employee 
						emp={this.state.employees} 
						filter={this.state.filter} 
						isSorted={this.state.isSorted}
						shouldSort={this.state.shouldSort}
						/>
						</div>
				</div>
			</div>
		);
	};
    
};

export default Container;