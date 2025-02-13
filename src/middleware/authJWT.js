require("dotenv").config();
const jwt = require("jsonwebtoken");

const authJwt = (req, res, next) => {
	const publicRoute = ["/", "/login", "/register"];
	if (publicRoute.find((route) => "/v1/api" + route === req.originalUrl)) {
		return next();
	} else {
		setTimeout(() => {
			if (req?.header("Authorization")?.split(" ")[1]) {
				const token = req.header("Authorization").split(" ")[1];
				// console.log("Check token:::", token);

				// console.log("decode:", decode);
				try {
					const decode = jwt.verify(token, process.env.JWT_SECRET);
					req.user = {
						email: decode?.email,
						name: decode?.name,
						createdBy: "thanhnhangg"
					}
					next()
				} catch (error) {
					return res.status(401).json({
						message: error.message
					})
				}

			} else {
				return res.status(401).json({
					message:
						"Bạn chưa truyền Access token header/ Token header bị hết hạn.",
				});
			}
		}, 1000);
	}
};

module.exports = authJwt;
