// db.js
const mongodb = require("mongodb");

const uri = process.env.MONGO_URI;
const dbName = "condiment-pen";

let db;

const connect = async () => {
  const client = await mongodb.MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  db = client.db(dbName);
};

const close = () => {
  client.close();
};

const addEmail = async (email) => {
  const emails = db.collection("emails");
  await emails.insertOne({ email });
};

module.exports = {
  connect,
  close,
  addEmail,
};
