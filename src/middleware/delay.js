const delay = (req, res, next) => {
	setTimeout(() => {
		if (req.header("Authorization")) {
			const token = req.header("Authorization").split(" ")[1];
			console.log("Check token:::", token);
		}
		next();
	}, 1000);
};

module.exports = delay;
