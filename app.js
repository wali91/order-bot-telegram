const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const CONFIG = require("./database/config/config");

const customerRouter = require("./routes/customer");
const driverRouter = require("./routes/driver");
const orderRouter = require("./routes/order");
const productRouter = require("./routes/product");
const OrderItemRouter = require("./routes/orderitem");

const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/customer", customerRouter);
app.use("/api/order", orderRouter);
app.use("/api/driver", driverRouter);
app.use("/api/product", productRouter);
app.use("/api/orderitem", OrderItemRouter);

const db = require("./database/models");
db.sequelize.sync();

// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my online order application." });
});

if (CONFIG.app === "dev") {
  // creates table if they do not already exist
  db.sequelize.sync();

  // deletes all tables then recreates them useful for testing and development purposes
  db.sequelize.sync({ force: true });
}

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});