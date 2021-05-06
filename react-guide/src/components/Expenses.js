import ExpenseItem from './ExpenseItem';
import Card from './Card'
import './Expenses.css';

function Expenses(props) {
	return (
		<Card className="expenses">
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
	);
}

export default Expenses;
