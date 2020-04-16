'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', 
			[
				{
					user_id: 1,
					status: 'accepted',
					driver_id: 2,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					user_id: 2,
					status: 'sending',
					driver_id: 1,
					createdAt: new Date(),
          updatedAt: new Date()
				}
			], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};