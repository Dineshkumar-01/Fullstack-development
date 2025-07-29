import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{n:0});
});

app.post("/submit", (req, res) => {
  var f=req.body["fName"];
  var s=req.body["lName"];
  var name=f+s;
  var length=name.length;
  res.render("index.ejs",{n: length});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
