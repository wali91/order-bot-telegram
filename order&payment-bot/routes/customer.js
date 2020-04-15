const customer = require("../controllers/customerController");

var router = require("express").Router();

// Get all Customers
router.get("/", customer.findAll);

// Create a new Customer
router.post("/", customer.create);

// Get Customer By Id
router.get("/:id", customer.findOne);

// Update Customer Data
router.put("/:id", customer.update);

// Delete Customer Data
router.delete("/:id", customer.delete);

module.exports = router;