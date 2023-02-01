const express = require("express");
const routes = require("./routes");
const db = require("./db");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(routes);

db.connect().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

process.on("SIGINT", () => {
  db.close();
  process.exit();
});
