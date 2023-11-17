const { Sequelize } = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: "postgres",
    host: "127.0.0.1",
    schema: process.env.DB_SCHEMA
})

module.exports = sequelize