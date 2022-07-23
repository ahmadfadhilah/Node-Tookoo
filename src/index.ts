import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hii");
});

app.listen(3000, () => {
  console.log("server running successfully on port 3000!");
});
