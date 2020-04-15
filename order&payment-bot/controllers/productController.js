const { product } = require("../database/models");

// Create and Save a new Product
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  // Create a Product
  const product1 = {
    name: req.body.data.attributes.name,
    price: req.body.data.attributes.price,
  };

  // Save Product in the database
  product
    .create(product1)
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
          err.message || "Some error occurred while creating the Product.",
      });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  product
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
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Find a single Product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  product
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
        message: "Error retrieving Product with id=" + id,
      });
    });
};

// Update a Product by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  product
    .update(req.body.data.attributes, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Product with id=" + id,
      });
    });
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  product
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id,
      });
    });
};