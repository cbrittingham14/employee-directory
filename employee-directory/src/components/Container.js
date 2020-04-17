import React, { Component } from 'react';
import employees from '../employees.json';
import Employee from './Employee';
class Container extends Component {
	// console.log('employees: ', employees);
	state = {
		employees
	}

	render() {
		console.log('In Render ',this.state);
		return(
			<div>
				<div>Hello</div>
				<Employee emp={this.state} />
			</div>
		);
	}
    
};

export default Container;