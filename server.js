const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.post("/ai", (req, res) => {
  const note = req.body.note || "";

  let icd = note.toLowerCase().includes("diabetes") ? "E11.9" : "R69";
  let cpt = "99213";

  res.json({ icd, cpt });
});

app.listen(5000);
