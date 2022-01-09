const mongoose = require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;
const db = process.env.MONGO_URI;
console.log(db);

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${db}`)
);
