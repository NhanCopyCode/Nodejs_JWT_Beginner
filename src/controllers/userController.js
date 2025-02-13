const { getAllUserService } = require("../services/userService");
const getAllUser = async (req, res) => {
	const result = await getAllUserService();

	return res.status(200).json({
		EC: 0,
		data: result,
	});
};
const getAccount = async (req, res) => {

	return res.status(200).json(req.user);
};

module.exports = {
	getAllUser,
	getAccount,
};
