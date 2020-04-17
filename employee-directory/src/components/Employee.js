import React from 'react';

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
		<ul key={i.id}>
			<li key={i.firstName}>{i.firstName}</li>
			<li key={i.lastName}>{i.lastName}</li>
		</ul>
	);
	console.log('all' , all);
	console.log('filtered array ',filtered)
	return (
		<div>
			<div>We rendered Employee</div>
			<div>
				List:
					<div>
						{toRender}
					</div>
			</div>
		</div>
	);
};

export default Employee;