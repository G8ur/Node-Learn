const Sequelize = require("sequelize"); // the node js sequelize global librabryy

// creating user modell using sequelize

const sequelize = require("../util/database"); // this is the sequelize library we created to connect the modell

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = User;
