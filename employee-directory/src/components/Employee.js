import React from 'react';
import TableHead from './TableHead';
import Table from './Table';

const Employee = ({ emp, filter, isSorted, shouldSort }) => {

	const employees = emp;
	let toRender;
	let sorted;
	let arrayToRender;

	const compare = (a,b) => {
		const nameA = a.department.toLowerCase();
		const nameB = b.department.toLowerCase();
		let comparison = 0;
		if(nameA > nameB){
			comparison = 1;
		} else if (nameA < nameB){
			comparison = -1;
		}
		return comparison;
	}
	
	//returns an array of employees whos names match the filter text
	const filtered = employees.filter(emp =>{
		let first = emp.firstName.toLowerCase();
		let last = emp.lastName.toLowerCase();
		return (first.indexOf(filter) >= 0||last.indexOf(filter) >= 0);
	});

	sorted = [...filtered].sort(compare);
	if(shouldSort && !isSorted){
		sorted.reverse();
	}
	arrayToRender = sorted;

	if (!shouldSort){
		arrayToRender = filtered;
	}
	//sets up the employee information to render in the view
	toRender = arrayToRender.map(i => 
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