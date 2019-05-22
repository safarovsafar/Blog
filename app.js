//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vest" +
    "ibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum " +
    "lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pre" +
    "tium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semp" +
    "er risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae t" +
    "ortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae" +
    ". Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vest" +
    "ibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum " +
    "lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pre" +
    "tium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semp" +
    "er risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae t" +
    "ortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae" +
    ". Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra " +
    "justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing" +
    " elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sap" +
    "ien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum variu" +
    "s sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum do" +
    "lor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque." +
    " Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fri" +
    "ngilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam lib" +
    "ero.";

const app = express();

const posts = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts
  });
});

app.get("/about", (req, res) => {
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", (req, res) => {
  res.render("contact", {contactContent: contactContent});
});
app.get("/compose", (req, res) => {
  res.render("compose");
});
app.post('/compose', (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  posts.push(post);
  res.redirect("/");
});

app.get('/posts/:postName', (req, res) => {
  const requestedTitle = _.lowerCase(req.params.postName);
  posts.forEach((post) => {
    const storedTitle = post.title;

    if (storedTite === requestedTitle) {
      console.log('Match found');
    }
  });
});

app.listen(3002, function () {
  console.log("3000");
});