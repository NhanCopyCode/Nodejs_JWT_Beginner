const { registerService, handleLoginService } = require("../services/authService");
const User = require("../models/user");

const register = async (req, res) => {
	const { email, name, password } = req.body;
	//Check email exists
	const existingUser = await User.findOne({ email }).lean();
	console.log('existingUser:', existingUser)
	if (existingUser) {
		return res.status(409).json({
			message: "Email already registered!!",
		});
	}
	const user = await registerService(name, email, password);
	if (!user) {
		return res.status(400).json({
			message: "Register failed!!",
		});
	}
	return res.status(200).json({
		message: "Register success!!!",
		user: user,
	});
};

const handleLogin = async (req, res) => {
	const { email, password } = req.body;

	const data = await handleLoginService(email, password);
	return res.status(200).json(data);
};

module.exports = {
	register,
	handleLogin,
};
