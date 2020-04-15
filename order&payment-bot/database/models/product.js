'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
  }, {});
  Product.associate = function(models) {
    Product.hasMany(models.OrderItem, {
			foreignKey: 'product_id',
			onDelete: 'CASCADE'
		});
  };
  return Product;
};