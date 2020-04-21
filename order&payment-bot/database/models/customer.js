'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true},
    full_name: {type: DataTypes.STRING, allowNull: false},
    username: {type: DataTypes.STRING, allowNull: false},
		email: {type: DataTypes.STRING, allowNull: false},
    phone_number: {type: DataTypes.STRING, unique: true, allowNull: false}
  }, {});
  Customer.associate = function(models) {
    Customer.hasMany(models.Order, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE'
		});
  };
  return Customer;
};