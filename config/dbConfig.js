const mongoose = require('mongoose');

console.log(process.env.mongo_url);

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("error connecting to database");
});


connection.on("connected", () => {
  console.log("mongo DB connection successful");
});


module.exports = connection;