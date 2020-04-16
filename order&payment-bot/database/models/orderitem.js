'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: {type: DataTypes.INTEGER, defaultValue: 1}
  }, {});
  OrderItem.associate = function(models) {
    OrderItem.belongsTo(models.Order,{
      foreignKey: 'order_id',
      onDelete: "CASCADE"
    })
    OrderItem.belongsTo(models.Product,{
      foreignKey: 'product_id',
      onDelete: "CASCADE"
    })
  };
  return OrderItem;
};