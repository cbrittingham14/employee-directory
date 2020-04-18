import React from 'react';
// import TableHead from './TableHead';

const Table = (props) => {
  return (
		<table className='table'>
      {props.children}
		</table>
  );
};

export default Table;