'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orderItems', 
				[
					{
						order_id: 1,
						product_id: 2,
						quantity: 1
					},
					{
						order_id: 2,
						product_id: 1,
						quantity: 1
					}
				], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orderItems', null, {});
  }
};