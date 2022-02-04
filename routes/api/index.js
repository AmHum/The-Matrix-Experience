const routes = require('express').Router();
const userContoller = require('../../controllers/userController');
const postContoller = require('../../controllers/postController');
routes.use("/users", userContoller.getAllUsers);
routes.use("/posts", postContoller.getAllPosts);

module.exports = routes;