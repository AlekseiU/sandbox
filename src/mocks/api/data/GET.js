module.exports = (request, response) => {
	setTimeout(() => {
		response.json({
			error: null,
			message: null,
			data: null,
		});
	}, 100);
};
