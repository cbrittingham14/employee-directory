import React from 'react';
import TableHead from './TableHead';
import Table from './Table';

const Employee = (props) => {

	const employees = props.emp;
	let toRender;

	const all = employees.map(i => 
		<ul key={i.id}>
			<li key={i.firstName}>{i.firstName}</li>
			<li key={i.lastName}>{i.lastName}</li>
		</ul>
	);
	const filtered = employees.filter(emp =>{
		let first = emp.firstName.toLowerCase();
		let last = emp.lastName.toLowerCase();
		return (first.indexOf(props.filter) >= 0||last.indexOf(props.filter) >= 0);
	});

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
	console.log('all' , all);
	console.log('filtered array ',filtered)
	return (
		<Table>
			<TableHead />
			{toRender}
		</Table>
	);
};

export default Employee;