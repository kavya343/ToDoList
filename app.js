const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var Items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  



  res.render("list", {kindOfDay: day, newListItems: Items});




});


app.post("/", function(req, res){
  var Item = req.body.newItem;

  Items.push(Item);

  res.redirect("/");
});


app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
