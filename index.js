const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const Port = process.env.Port || 8081



app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});



app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
