'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrderItems', 
				[
					{
						order_id: 1,
						product_id: 2,
						quantity: 1,
						createdAt: new Date(),
						updatedAt: new Date()
					},
					{
						order_id: 2,
						product_id: 1,
						quantity: 1,
						createdAt: new Date(),
						updatedAt: new Date()
					}
				], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderItems', null, {});
  }
};