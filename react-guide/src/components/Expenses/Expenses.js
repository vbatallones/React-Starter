import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
	const [enteredYear, setEnteredYear] = useState('2021')
	const yearFilterHandler = selectedYear => {
		console.log('Expense.js')
		setEnteredYear(selectedYear)
	}
	return (
		<div>
			<Card className="expenses">
			<ExpenseFilter selectedYear={enteredYear} onYearChangeHandler={yearFilterHandler}/>
				<ExpenseItem
					title={props.element[0].title}
					amount={props.element[0].amount}
					date={props.element[0].date}
				/>
				<ExpenseItem
					title={props.element[1].title}
					amount={props.element[1].amount}
					date={props.element[1].date}
				/>
				<ExpenseItem
					title={props.element[2].title}
					amount={props.element[2].amount}
					date={props.element[2].date}
				/>
				<ExpenseItem
					title={props.element[3].title}
					amount={props.element[3].amount}
					date={props.element[3].date}
				/>
			</Card>
		</div>
	);
};

export default Expenses;
