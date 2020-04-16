 
const { OrderItem } = require('../database/models');

// Create and Save a new OrderItem
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!"
    });
    return;
  }

  // Create a OrderItem
  const orderitem = {
    quantity: req.body.data.attributes.quantity
  };

  // Save OrderItem in the database
  OrderItem.create(orderitem)
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
          err.message || "Some error occurred while creating the OrderItem."
      });
    });
};

// Retrieve all OrderItems from the database.
exports.findAll = (req, res) => {
  OrderItem.findAll()
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
          err.message || "Some error occurred while retrieving orderitems."
      });
    });
};

// Find a single OrderItem with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  OrderItem.findByPk(id)
    .then(data => {
      res.send({
        message: "success retrieve data",
				status: true,
				data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving OrderItem with id=" + id
      });
    });
};

// Update a OrderItem by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  OrderItem.update(req.body.data.attributes, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "OrderItem was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update OrderItem with id=${id}. Maybe OrderItem was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating OrderItem with id=" + id
      });
    });
};

// Delete a OrderItem with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  OrderItem.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "OrderItem was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete OrderItem with id=${id}. Maybe OrderItem was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete OrderItem with id=" + id
      });
    });
};