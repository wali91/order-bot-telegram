'use strict';
module.exports = (sequelize, DataTypes) => {
	const Order = sequelize.define('Order', {
	  user_id: DataTypes.INTEGER,
	  status: {type: DataTypes.ENUM('accepted', 'sending', 'done', 'failure'),allowNull:false},
	  driver_id: DataTypes.INTEGER
	}, {});
	Order.associate = function(models) {
	  Order.belongsTo(models.Customer,{
		foreignKey: 'user_id',
		onDelete: "CASCADE"
	  })
	  Order.belongsTo(models.Driver,{
		foreignKey: 'driver_id',
		onDelete: "CASCADE"
	  })
  
	  Order.hasMany(models.OrderItem,{
		foreignKey: 'order_id',
		onDelete: "CASCADE"
	  })
	};
	return Order;
  };