'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING,
				allowNull: false
      },
      username: {
        type: Sequelize.STRING,
				allowNull: false
      },
      email: {
        type: Sequelize.STRING,
				unique: true, 
				allowNull: false
      },
      phone_number: {
        type: Sequelize.STRING,
				unique: true, 
				allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};