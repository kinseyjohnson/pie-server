const Sequelize = require("sequelize")

const sequelize = new Sequelize("postgres://postgres:hellokinsey@localhost:5432/pieserver") 
//dbType://user:password@ipAddress:port/dnName

module.exports = sequelize