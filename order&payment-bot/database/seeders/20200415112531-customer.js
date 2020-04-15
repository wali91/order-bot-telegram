'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('customers', 
			[
				{
					full_name: 'pradahlan dahlan',
					username: 'pradahlan',
					email: 'pradahlan@gmail.com',
					phone_number: '08120846500',
					createdAt: new Date(),
          updatedAt: new Date()
				},
				{
					full_name: 'Nurislamiyati Zahra',
					username: 'zahra',
					email: 'nur@zahramail.com',
					phone_number: '08312049045',
					createdAt: new Date(),
          updatedAt: new Date()
				}
			], {});
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('customers', null, {});
  }
};