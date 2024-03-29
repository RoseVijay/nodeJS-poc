require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
  }
);

module.exports = sequelize;
