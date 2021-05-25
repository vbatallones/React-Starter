import React, { useState } from 'react';

import './ExpenseForm.css';
// import ToggleForm from './ToggleForm';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	// const [viewForm, setViewForm] = useState(false);

	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
	};

	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
	};

	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
		// setViewForm(false);
		
	};

	// const toggleExpenseFormHandler = (e) => {
	// 	e.preventDefault();
	// 	!viewForm ? setViewForm(true) : setViewForm(false);
	// };
	return (
		// <div>
		// 	{!viewForm ? (
		// 		<button onClick={toggleExpenseFormHandler}>Add New Expense</button>
		// 	) : (
				<form onSubmit={submitHandler}>
					<div className="new-expense__controls">
						<div className="new-expense__controls">
							<label>Title</label>
							<input
								type="text"
								value={enteredTitle}
								onChange={titleChangeHandler}
							/>
						</div>
						<div className="new-expense__controls">
							<label>Amount</label>
							<input
								type="number"
								min="0.01"
								stpe="0.01"
								value={enteredAmount}
								onChange={amountChangeHandler}
							/>
						</div>
						<div className="new-expense__controls">
							<label>Date</label>
							<input
								type="date"
								min="2019-01-01"
								max="2022-12-31"
								value={enteredDate}
								onChange={dateChangeHandler}
							/>
						</div>
					</div>
					<div className="new-expense__actions">
						{/* <button
							className="cancel-button"
							onClick={toggleExpenseFormHandler}
						>
							Cancel
						</button> */}
						<button type="button" onClick={props.onCancel}>Cancel</button>
						<button type="submit">Add Expense</button>
					</div>
				</form>
			// )}
		// </div>
	);
};

export default ExpenseForm;
