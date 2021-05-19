import React from 'react';
// import Expenses from '../Expenses/Expenses';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
	// passing components to child to parent.
	// the props is coming from the Expenses.js and using the function that has been created there.
	const yearChangeHandler = (e) => {
		props.onYearChangeHandler(e.target.value);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by Year</label>
				<select onChange={yearChangeHandler}>
					<option value={props.selectedYear}>2021</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
					<option value="2024">2024</option>
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;
