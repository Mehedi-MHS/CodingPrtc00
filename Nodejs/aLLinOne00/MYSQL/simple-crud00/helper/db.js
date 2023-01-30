const express = require("express");
const mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  password: "root",
  database: "db00"
});

module.exports=pool;





