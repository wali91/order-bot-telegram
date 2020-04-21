const sqlite3 = require('sqlite3').verbose()
const dbFile = __dirname + "/sqlite/order_online.sqlite3";

let db = new sqlite3.Database(dbFile,sqlite3.OPEN_READWRITE, (err) => {
    if(err) throw err;
    console.log("koneksi ke database berhasil")
})

module.exports = db;