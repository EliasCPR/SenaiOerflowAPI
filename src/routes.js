const routes = require("express").Router();
const postController = require("./Controllers/posts");
const sessionController = require("./Controllers/sessions");
const userController = require("./Controllers/Users"); 

routes.post('/sessions', sessionController.store);

routes.post('users', userController.store);

routes.get("/post", postController.index);

module.exports = routes;