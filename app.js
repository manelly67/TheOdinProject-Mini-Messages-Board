const express = require("express");
const PORT = 3000;
const path = require("node:path");
const messagesRoutes = require('./routes/messagesRoutes.js');
const arrays = require("./arrays.js");

const { links, messages } = arrays;

// express app
const app = express();

// middleware and to serve static assets
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));  // si no se utiliza esta middleware el post object resulta undefined

// to define the view engine and path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routes


app.get("/", (req, res) => {
    res.render("index", { links: links, title:links[0].text, messages: messages});
});

app.use('/new', messagesRoutes);

//404 page

app.use((req, res) => {
    res.status(404).render("404", { links: links, title: "404" });
});


app.listen(PORT, () => {
    console.log(`Express and EJS view engine ${PORT}!`);
});

