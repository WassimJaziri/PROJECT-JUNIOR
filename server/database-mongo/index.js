const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/Credit";
mongoose.set("strictQuery", false);

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });

const db = mongoose.connection;

module.exports = db;
