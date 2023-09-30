import React from "react";
import classNames from "classnames";

function Button({ className = "", children, ...props }) {
	const classes = classNames("button", className);

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
}

export default Button;
