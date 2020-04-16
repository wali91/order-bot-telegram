'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Products', 
			[
				{
					name: 'Apple iPhone X (Space Grey, 3GB RAM, 64GB Storage)',
					price: 6795000,
					description: 'Camera: 12+12 MP Dual rear camera with Dual optical image stabilization, 4K Video recording at 24 fps or 30 fps or 60 fps and Slow-motion video recording in 1080p at 120 fps',
					createdAt: new Date(),
          			updatedAt: new Date()
				},
				{
					name: 'Samsung Galaxy On7 Prime (Black, 4GB RAM, 64GB Storage)',
					price: 4500000,
					description: 'Camera: 13 MP Rear camera with f1.9 with Auto focus and Rear flash, Storage & SIM: 4GB RAM | 64GB storage expandable up to 256GB | Dual nano SIM with dual standby (4G+3G)',
					createdAt: new Date(),
          			updatedAt: new Date()
				},
				{
					name: 'RealMe 1 (Black, 6GB RAM, 128GB Storage)',
					price: 4795000,
					description: 'Camera: 13 MP front camera Display: 15.24 centimeters (6-inch) Full HD In-cell capacitive touchscreen display with 2160x1080 pixels',
					createdAt: new Date(),
          			updatedAt: new Date()
				},
				{
					name: 'Vivo V9Pro (Black, 6GB RAM, Snapdragon 660AIE)',
					price: 3500000,
					description: 'Camera: 13+2 MP ,AR Stickers and many more , AR stickers Display: 15.51 centimetres (6.3-inch) FHD+Fullview display 2.0 and 19:9 aspect ratio, 90 percent screen to body ratio',
					createdAt: new Date(),
          			updatedAt: new Date()
				}
			], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};