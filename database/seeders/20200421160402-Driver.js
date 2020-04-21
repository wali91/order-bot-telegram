'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Drivers', 
			[
				{
					full_name: 'Ronaldo gonzalfes',
					phone_number: '0831204856',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					full_name: 'Abdul Rahman',
					phone_number: '08512305698',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drivers', null, {});
  }
};