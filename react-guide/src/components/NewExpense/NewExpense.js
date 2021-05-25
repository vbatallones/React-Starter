import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
	const [viewForm, setViewForm] = useState(false);

	const saveExpenseData = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setViewForm(false)
	};

	const toggleExpenseFormHandler = () => setViewForm(true);

	const cancelExpenseFormHandler = () => setViewForm(false);

	return (
		<div className="new-expense">
			{!viewForm && (
				<button onClick={toggleExpenseFormHandler}>Add New Expense</button>
			)}
			{viewForm && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={cancelExpenseFormHandler} />}
		</div>
	);
};

export default NewExpense;
