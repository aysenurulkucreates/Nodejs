const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '69176917', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;