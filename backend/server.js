const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Catering Backend Running");
});

app.listen(80, "0.0.0.0", () => {
  console.log("Server running on port 80");
});
