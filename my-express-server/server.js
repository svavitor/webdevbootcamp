const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, world!</h2>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: contact@vvv.com");
});

app.get("/about", function(req, res){
  res.send("My name is Vitor and I love gaming and code.");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coffee</li><li>Gaming</li><li>Code</li></ul>");
});

app.listen(300, function() {
  console.log("Server started on port 3000");
});
