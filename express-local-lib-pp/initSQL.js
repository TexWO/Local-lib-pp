const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./library.db");

module.exports = db;
