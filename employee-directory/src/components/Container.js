import React, { Component } from 'react';
import employees from '../employees.json';
import Employee from './Employee';
class Container extends Component {
	text = '';
	state = {
		employees,
		filter: ''
	}
	genKey = () =>{
		return Math.random();
	}
	handleInputChange = e => {
		
		this.setState({
			filter: e.target.value
		});
		console.log('filter ', this.state.filter);
	};
	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			filter:''
		})
	};

	render() {
		return(
			<div>
				<form className="form">
				<input
            value={this.state.filter}
            name="filter"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Filter"
          />
					<button onClick={this.handleSubmit}>Submit</button>
				</form>
				<div>Hello</div>
				<Employee emp={this.state.employees} filter={this.state.filter} />
			</div>
		);
	}
    
};

export default Container;