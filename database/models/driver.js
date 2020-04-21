'use strict';
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    full_name: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {});
  Driver.associate = function(models) {
    Driver.hasMany(models.Order, {
			foreignKey: 'driver_id',
			onDelete: 'CASCADE'
		});
  };
  return Driver;
};