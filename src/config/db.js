const mongoose = require("mongoose");
const connectToDb = async () => {
  mongoose
    .connect("mongodb+srv://bethiane:rtxY6dnZq6hj%40DR@cluster0.reenb.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDb;
