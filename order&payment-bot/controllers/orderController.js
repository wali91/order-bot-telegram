const { Order, OrderItem } = require('../database/models');

// Create and Save a new Order
exports.create = (req, res) => {
  // Validate request
  if (!req.body.data) {
    res.status(400).send({
      message: "Data can not be empty!"
    });
		return;
  }
	
	// Create an Order
  const order = {
    user_id: req.body.data.attributes.user_id,
    driver_id: req.body.data.attributes.driver_id,
		status: req.body.data.attributes.status,
		order_detail: req.body.data.attributes.order_detail
  };

  // Save Order in the database
  Order.create(req.body.data.attributes, {
		include: [{
			model: OrderItem,
			as: 'order_detail',
			allowNull: false
		}]
	})
    .then(data => {
      res.send({
        message: "success retrieve data",
				status: true,
				data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Order."
      });
    });
};

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
  Order.findAll({
		include: [
			{
					model: OrderItem,
					as: 'order_detail',
					attributes: {
						exclude: ['id', 'order_id']
					}
			},
		],
		attributes: {
			exclude: ['createdAt', 'updatedAt']
		}
	})
    .then(data => {
      res.send({
        message: "success retrieve data",
				status: true,
				data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};

// Find a single Order with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Order.findByPk(id, {
		include: [
			{
					model: OrderItem,
					as: 'order_detail',
					attributes: {
						exclude: ['id', 'order_id']
					}
			},
		],
		attributes: {
			exclude: ['createdAt', 'updatedAt']
		}
	})
    .then(data => {
      res.send({
        message: "success retrieve data",
				status: true,
				data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Order with id=" + id
      });
    });
};

// Update a Order by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Order.update(req.body.data.attributes, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Order was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Order with id=" + id
      });
    });
};

// Delete a Order with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Order.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Order was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Order with id=${id}. Maybe Order was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Order with id=" + id
      });
    });
};