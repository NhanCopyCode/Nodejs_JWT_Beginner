const express = require("express");
const { register, handleLogin } = require("../controllers/authController");
const { getAllUser } = require("../controllers/userController");
const delay = require("../middleware/delay");
const routerAPI = express.Router();

routerAPI.all("*", delay);

routerAPI.get("/", delay, (req, res, next) => {
	return res.status(200).json("Hello world");
});

routerAPI.post("/register", register);
routerAPI.post("/login", handleLogin);

routerAPI.get("/users", getAllUser);

module.exports = routerAPI; //export default
