const { driver } = require("../database/models");

// Create and Save a new Driver
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Data can not be empty!",
    });
    return;
  }

  // Create a Driver
  const driver1 = {
    full_name: req.body.data.attributes.full_name,
    phone_number: req.body.data.attributes.phone_number,
  };

  // Save Driver in the database
  driver
    .create(driver1)
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
          err.message || "Some error occurred while creating the Driver.",
      });
    });
};

// Retrieve all Drivers from the database.
exports.findAll = (req, res) => {
  driver
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
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Driver with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  driver
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
        message: "Error retrieving Driver with id=" + id,
      });
    });
};

// Update a Driver by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  driver
    .update(req.body.data.attributes, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Driver was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Driver with id=${id}. Maybe Driver was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Driver with id=" + id,
      });
    });
};

// Delete a Driver with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  driver
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Driver was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Driver with id=${id}. Maybe Driver was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Driver with id=" + id,
      });
    });
};