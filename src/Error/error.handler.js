const ErrorHandler = ({ error, res }) => {
	const errors_names = Object.getOwnPropertyNames(error?.errors);
	if (errors_names.length) {
		let errors_messages = errors_names.map(
			(err) => error.errors[err].message
		);
		res.json({
			success: false,
			messages: errors_messages,
		});
	} else {
		res.json({
			success: false,
			message: error,
		});
	}
};

module.exports = ErrorHandler;
