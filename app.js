const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));

const port = 3300;
var names = [
  { UID: "1", UNAME: "Yusuf" },
  { UID: "2", UNAME: "Mark" },
  { UID: "3", UNAME: "Lee" }
];

app.get("/", function(req, res) {
  res.write("hello");
  res.end();
});

app.get("/getuser", function(req, res) {
  res.render("getuser");
});

app.get("/getusers", function(req, res) {
  res.render("getusers", { users: names });
});

app.get("/showuser", function(req, res) {
  let uid = req.query.userid;
  console.log(uid);
  let user = undefined;
  names.forEach(function(name) {
    console.log(name.UID);
    if (name.UID === uid) {
      user = name;
    }
  });
  console.log(user);
  if (user) {
    res.render("showuser", { user: user });
  } else {
    res.render("showuser", { user: undefined });
  }
});

app.listen(port, function() {
  console.log("Server started at port... ");
});
