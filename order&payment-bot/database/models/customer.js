'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    full_name: DataTypes.STRING,
    username: {type: DataTypes.STRING, unique: true, allowNull: false},
		email: {type: DataTypes.STRING, unique: true, allowNull: false},
    phone_number: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    Customer.hasMany(models.Order, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE'
		});
  };
  return Customer;
};