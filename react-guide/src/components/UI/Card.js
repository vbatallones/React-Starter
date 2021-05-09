import './Card.css';

const Card = (props) => {
	// passing other class name besides the "card" class name by doing so.
	// then pass that variable to the className from the div
	const classes = 'card ' + props.className;

	return (
		<div className={classes}>{props.children}</div>
		// props.children does is that it is used to display whatever you include between the opening and closing tags when invoking a component.
	);
};

export default Card;
