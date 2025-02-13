require("dotenv").config();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

const handleLoginService = async (email, password) => {
	try {
		//fetch user by email
		const user = await User.findOne({ email: email }).lean();
		if (user) {
			const matchPassword = await bcrypt.compare(password, user.password);

			if (!matchPassword) {
				return {
					EC: 2,
					EM: "Email/Password invalid!!",
				};
			} else {
				//create access token
				const payload = {
					email: user.email,
					name: user.name,
				};
				const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
					expiresIn: process.env.JWT_EXPIRES,
				});
				return {
					EC: 0,
					access_token,
					email: user.email,
					name: user.name,
				};
			}
		} else {
			return {
				EC: 1,
				EM: "Email/Password invalid!!",
			};
		}
		
	} catch (error) {
		console.log(error);
		return null;
	}
};

module.exports = {
	registerService,
	handleLoginService,
};
