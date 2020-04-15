const driver = require("../controllers/driverController");

var router = require("express").Router();
// Create a new Driver
router.post("/", driver.create);

// Retrieve all Drivers
router.get("/", driver.findAll);

// Retrieve a single Driver with id
router.get("/:id", driver.findOne);

// Update a Driver with id
router.put("/:id", driver.update);

// Delete a Driver with id
router.delete("/:id", driver.delete);

module.exports = router;