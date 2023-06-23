const Sequelize = require("sequelize");
const sequelize = require("../config/keys");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
