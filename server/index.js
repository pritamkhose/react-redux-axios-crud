const express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(express.json());
const port = 8080;
var tutorials = require("./tutorials.json");

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.get("/api/tutorials", cors(), (req, res) => {
  var title = req.query.title;
  if (title !== undefined && title !== null && title.length > 0) {
    const filterTutorials = tutorials.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
    return res.status(200).json(filterTutorials);
  } else {
    return res.json(tutorials);
  }
});

app.post("/api/tutorials", cors(), (req, res) => {
  id = tutorials.length + 1;
  var tut = {
    id: id,
    title: req.body.title,
    description: req.body.description,
  };
  tutorials.push(tut);
  return res.status(201).json(tut);
});

app.put("/api/tutorials/:id", cors(), (req, res) => {
  //get the username from url
  const id = req.params.id;

  //filter the to update it
  const filterTutorials = tutorials.filter((item) => item.id.toString() !== id);
  tutorials = filterTutorials;
  tutorials.push(req.body);
  return res.status(200).json(req.body);
});

app.patch("/api/tutorials", cors(), (req, res) => {
  tutorials = [];
  tutorials = require("./tutorials.json");
  return res.status(200).json(tutorials);
});

app.get("/api/tutorials/:id", cors(), (req, res) => {
  //get the username from url
  const id = req.params.id;

  //filter the tutorials to remove it
  const filterTutorials = tutorials.filter((item) => item.id.toString() == id);
  if (tutorials.length === filterTutorials.length) {
    return res
      .status(409)
      .send({ error: true, msg: "tutorials does not exist" });
  }
  return res.status(200).json(filterTutorials[0]);
});

app.delete("/api/tutorials/:id", cors(), (req, res) => {
  //get the username from url
  const id = req.params.id;

  //filter the tutorials to remove it
  const filterTutorials = tutorials.filter((item) => item.id.toString() !== id);
  tutorials = filterTutorials;
  return res.status(200).json(filterTutorials);
});

app.delete("/api/tutorials", cors(), (req, res) => {
  tutorials = [];
  return res.json(tutorials);
});

app.get("/users/pritamkhose/repos", cors(), (req, res) => {
    return res.json(require("./repos.json"));
});

app.get("/users/pritamkhose/followers", cors(), (req, res) => {
  return res.json(require("./followers.json"));
});

app.get("/users/pritamkhose/following", cors(), (req, res) => {
  return res.json(require("./following.json"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
