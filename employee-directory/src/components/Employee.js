import React from 'react';

const Employee = (props) => {

	const employees = props.emp.employees;
	console.log('employees ', employees);

	const firsts = employees.map(i => 
	<li>{i.firstName}</li>
	);
	return (
		<div>
			<div>We rendered Employee</div>
			<div>
				List:
					<div>
						<p>{firsts}</p>
					</div>
			</div>
		</div>
	);
};

export default Employee;