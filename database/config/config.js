require("dotenv").config({ path: ".env" });

module.exports = {
  test: {
    "dialect": "sqlite",
    "storage": ":memory"
  },
  development: {
    dialect: 'sqlite',
    storage: './order_online.sqlite3'
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PWD,
    database: process.env.DATABASE_PWD,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
  },
};
