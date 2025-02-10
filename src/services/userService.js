const User = require("../models/user");

const getAllUserService = async () => {
    try {
        const users = User.find({});
        return users;
    } catch (error) {
        console.log('error:', error)
        return null;
    }
}

module.exports = {
    getAllUserService
}