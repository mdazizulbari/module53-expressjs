const express = require("express");
const cors = require("cors");
const posts = require("./posts.json");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (request, response) => {
  response.send("My Express server");
});

app.get("/posts", (request, response) => {
  response.send(posts);
});

app.get("/posts/:id", (request, response) => {
  const id = Number(request.params.id);
  console.log("i need data for id", id);
  const post = posts.find((post) => post.id === id) || {};
  response.send(post);
});

app.listen(port, () => {
  console.log(`Example app on port ${port}`);
});
