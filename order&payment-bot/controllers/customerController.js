const { Customer } = require("../database/models");

// Create and Save a new Customer
exports.create = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  //create customer
  const customer = {
    id : req.body.data.attributes.id,
    full_name: req.body.data.attributes.full_name,
    username: req.body.data.attributes.username,
    email: req.body.data.attributes.email,
    phone_number: req.body.data.attributes.phone_number,
  };

  // Save Customer in the database
  Customer
    .create(customer)
    .then((data) => {
      res.send({
        message: "success retrieve data",
        status: true,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    });
};

//Retrieve all customer from database
exports.findAll = (req, res) => {
  Customer
    .findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    })
    .then((data) => {
      res.send({
        message: "success retrieve data",
        status: true,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    });
};
// Find a single Customer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Customer
    .findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    })
    .then((data) => {
      res.send({
        message: "success retrieve data",
        status: true,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Customer with id=" + id,
      });
    });
};

// Update a Customer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Customer
    .update(req.body.data.attributes, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Customer was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Customer with id=${id}. Maybe Customer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Customer with id=" + id,
      });
    });
};

// Delete a Customer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Customer
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Customer was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Customer with id=" + id,
      });
    });
};