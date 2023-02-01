const mongoose = require("mongoose");
const config = require("./config");

const uri = config.MONGO_URI;
const dbName = "condiment-pen";

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Email = mongoose.model("Email", emailSchema);

const connect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
  }
};

const close = () => {
  mongoose.connection.close();
};

const addEmail = async (email) => {
  const newEmail = new Email({ email });
  try {
    await newEmail.save();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  connect,
  close,
  addEmail,
};
