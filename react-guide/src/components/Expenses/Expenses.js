import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
	// saving the passed component from the child to this parent component
	const [enteredYear, setEnteredYear] = useState('2021');
	// function that holds and set the information from the child component.
	const yearFilterHandler = (selectedYear) => {
		setEnteredYear(selectedYear);
	};

	const filteredExpenses = props.element.filter((year) => {
		return year.date.getFullYear().toString() === enteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				{/* passing the props function for ExpenseFilter to use for the component. */}
				<ExpenseFilter
					selectedYear={enteredYear}
					onYearChangeHandler={yearFilterHandler}
				/>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
