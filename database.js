const mongoose = require("mongoose");

function Dbconnect() {
  const DB_URL = process.env.DB_URL;
  mongoose
    .connect(DB_URL)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("DB connected...");
  });
}

module.exports = Dbconnect;
