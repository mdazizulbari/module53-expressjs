const express = require("express");
const app = express();
const port = 5000;

app.get("/", (request, response) => {
  response.send("Hello from my first server but not the last really");
});

app.get('/data',(request,response)=>{
  response.send('More data is comming soon')
})

app.listen(port, () => {
  console.log(`Example app on port ${port}`);
});
