import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
	// saving the passed component from the child to this parent component
	const [enteredYear, setEnteredYear] = useState('2021');
	// function that holds and set the information from the child component.
	const yearFilterHandler = (selectedYear) => {
		setEnteredYear(selectedYear);
	};

	// filter by year on the created expenses
	const filteredExpenses = props.element.filter((year) => {
		return year.date.getFullYear().toString() === enteredYear;
	});
// // setting conditional state here from the variable passed in to line 21 to up to line 33
// 	let expensesContent = <p>No expenses found</p>;

// 	if (filteredExpenses.length > 0) {
// 		expensesContent = filteredExpenses.map((expense) => (
// 			<ExpenseItem
// 				key={expense.id}
// 				title={expense.title}
// 				amount={expense.amount}
// 				date={expense.date}
// 			/>
// 		));
// 	}

	return (
		<div>
			<Card className="expenses">
				{/* passing the props function for ExpenseFilter to use for the component. */}
				<ExpenseFilter
					selectedYear={enteredYear}
					onYearChangeHandler={yearFilterHandler}
				/>
					<ExpensesList items={filteredExpenses}/>
			</Card>
				{/* Render content conditionally. filtering by expenses. if there is no expenses render the paragraph otherwise render the ExpenseItem.js */}
				{/* {filteredExpenses.length === 0 ? (
					<p>No expenses found</p>
				) : (
					filteredExpenses.map((expense) => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))
				)} */}
				
				{/* Rendering the variable, because it has the conditional content see in line 21 to 31 */}
				{/* expensesContent */}
		</div>
	);
};

export default Expenses;
