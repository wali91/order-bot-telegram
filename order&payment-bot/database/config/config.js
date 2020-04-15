require("dotenv").config({ path: ".env" });

module.exports = {
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWD,
    database: process.env.DATABASE_NAME,
    dialect: "postgres",
  },
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWD,
    database: process.env.DATABASE_NAME,
    dialect: "postgres",
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWD,
    database: process.env.DATABASE_NAME,
    dialect: "postgres",
  },
};
