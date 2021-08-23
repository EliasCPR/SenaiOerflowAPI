const Sequelize = require("Sequelize");
const dbConfig = require("../config/database");
const Post = require("../models/Post");

const connection =  new Sequelize(dbConfig.url, dbConfig.config);

Post.init(connection);

module.exports = connection;