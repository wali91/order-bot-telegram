'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Customers', 
			[
				{
					id: 1,
					full_name: 'waliey_rahman',
					username: 'wali',
					email: 'wali@gmail.com',
					phone_number: '081297503890',
					createdAt: new Date(),
          updatedAt: new Date()
				},
				{
					id: 2,
					full_name: 'fernando Guteres',
					username: 'rashzam',
					email: 'fernando@gmail.com',
					phone_number: '0812598837',
					createdAt: new Date(),
          updatedAt: new Date()
				}
			], {});
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Customers', null, {});
  }
};
