const express = require("express");
const { register, handleLogin } = require("../controllers/authController");
const { getAllUser, getAccount } = require("../controllers/userController");
const authJwt = require("../middleware/authJWT");
const routerAPI = express.Router();

routerAPI.all("*", authJwt);

routerAPI.get("/", authJwt, (req, res, next) => {
	return res.status(200).json("Hello world");
});

routerAPI.post("/register", register);
routerAPI.post("/login", handleLogin);

routerAPI.get("/users", getAllUser);
routerAPI.get("/account", getAccount);

module.exports = routerAPI; //export default
