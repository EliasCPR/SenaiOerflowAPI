const routes = require("express").Router();
const controller = require("./controllers/post");



app.get("/posts",postController.index);

module.exports = routes;