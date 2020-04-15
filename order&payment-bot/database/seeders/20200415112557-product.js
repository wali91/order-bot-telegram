'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('products', 
			[
				{
					name: 'Samsung S11 (Space Grey, 3GB RAM, 64GB Storage)',
					price: 6795000,
					description: 'Camera: 12+12 MP Dual rear camera with Dual optical image stabilization, Portrait Mode, Digital zoom up to 10x, Quad-LED True tone flash and Slow sync, 4K Video recording at 24 fps or 30 fps or 60 fps and Slow-motion video recording in 1080p at 120 fps | 7 MP front TrueDepth camera with Retina Flash and Animoji feature',
					createdAt: new Date(),
          			updatedAt: new Date()
				},
				{
					name: 'Samsung A9 (Black, 4GB RAM, 64GB Storage)',
					price: 4500000,
					description: 'Camera: 13 MP Rear camera with f1.9 with Auto focus and Rear flash | 13 MP front camera Display: 13.88 centimeters (5.5-inch) Full HD display with 1080x1920 pixels | 2.5D Gorilla Glass Memory, Storage & SIM: 4GB RAM | 64GB storage expandable up to 256GB | Dual nano SIM with dual standby (4G+3G)',
					createdAt: new Date(),
          			updatedAt: new Date()
				},
				{
					name: 'Nokia  (Black, 6GB RAM, 128GB Storage)',
					price: 4795000,
					description: 'Camera: 13 MP Rear camera with Fast facial unlock in less than 0.1 second with AI Recognition | 8 MP front camera Display: 15.24 centimeters (6-inch) Full HD In-cell capacitive touchscreen display with 2160x1080 pixels',
					createdAt: new Date(),
          			updatedAt: new Date()
				},
				{
					name: 'Vivo v11 (Black, 6GB RAM, Snapdragon 660AIE)',
					price: 3500000,
					description: 'Camera: 13+2 MP Dual rear camera with Ultra HD, Live Mode, AI Bokeh, HDR, Face Beauty, AR Stickers and many more | 16 MP AI Selfie camera with Face Beauty, AI HDR, Bokeh effect, Group selfie, Live photo, AR stickers Display: 15.51 centimetres (6.3-inch) FHD+Fullview display 2.0 and 19:9 aspect ratio, 90 percent screen to body ratio',
					createdAt: new Date(),
          			updatedAt: new Date()
				}
			], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};