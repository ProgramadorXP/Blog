import express, { response } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let id = 0;
const posts = [];
const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = "";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get(`/post/:id`, (req, res) => {
    res.render("postDetail.ejs", {posts: posts[req.params.id], date: date});
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.post("/", (req, res) => {
    posts.push({ id: id++, title: req.body.title, des: req.body.description });
    date = months[d.getMonth()] + " " + d.getDate();
    res.render("index.ejs", {posts: posts});
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});