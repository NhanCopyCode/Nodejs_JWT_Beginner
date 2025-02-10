const express = require("express");
const { register, handleLogin } = require("../controllers/authController");
const { getAllUser } = require("../controllers/userController");
const routerAPI = express.Router();

// const { getUsersAPI, postCreateUserAPI,
//     putUpdateUserAPI, deleteUserAPI

// } = require('../controllers/apiController')

// routerAPI.get('/users', getUsersAPI);
// routerAPI.post('/users', postCreateUserAPI);
// routerAPI.put('/users', putUpdateUserAPI);
// routerAPI.delete('/users', deleteUserAPI);

routerAPI.get("/", (req, res, next) => {
	return res.status(200).json("Hello world");
});

routerAPI.post("/register", register);
routerAPI.post("/login", handleLogin);

routerAPI.get("/users", getAllUser);

module.exports = routerAPI; //export default
