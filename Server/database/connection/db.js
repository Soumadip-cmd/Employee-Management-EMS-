const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Connection = async () => {
  const { DB_USERNAME, DB_PASSWORD } = process.env;
  
  const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster.i2vdnrs.mongodb.net/curd_ems?retryWrites=true&w=majority&appName=Cluster`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Db Connection Successfully");
  } catch (error) {
    console.log("Connection Error with Database", error);
  }
};

module.exports = Connection;
