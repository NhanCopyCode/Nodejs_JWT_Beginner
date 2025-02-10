const { getAllUserService } = require("../services/userService");
const getAllUser = async (req, res) => {
	const result = await getAllUserService();

	return res.status(200).json({
		EC: 0,
		data: result,
	});
};

module.exports = {
	getAllUser,
};
