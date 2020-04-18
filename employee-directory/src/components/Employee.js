import React from 'react';
import TableHead from './TableHead';
import Table from './Table';

const Employee = (props) => {

	const employees = props.emp;
	let toRender;

	//returns an array of employees whos names match the filter text
	const filtered = employees.filter(emp =>{
		let first = emp.firstName.toLowerCase();
		let last = emp.lastName.toLowerCase();
		return (first.indexOf(props.filter) >= 0||last.indexOf(props.filter) >= 0);
	});

	//sets up the employee information to render in the view
	toRender = filtered.map(i => 
		<tbody key={i.id}>
			<tr>
				<td>{i.id}</td>
				<td>{i.firstName}</td>
				<td>{i.lastName}</td>
				<td>{i.role}</td>
				<td>{i.department}</td>
			</tr>
		</tbody>
	);
	
	return (
		<Table>
			<TableHead />
			{toRender}
		</Table>
	);
};

export default Employee;