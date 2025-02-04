const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const registerService = async (name, email, password) => {
	try {
		

		//hash password
		const hashPassword = await bcrypt.hash(password, saltRounds);
		const result = await User.create({
			name: name,
			email: email,
			password: hashPassword,
			role: "thanhnhangg",
		});

		return result;
	} catch (error) {
		console.log(error);
		return null;
	}
};

module.exports = {
	registerService,
};
