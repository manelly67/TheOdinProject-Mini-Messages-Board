// messagesRoutes.js
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const arrays = require('../arrays');

const { links, messages } = arrays;

const validateUser = [
  body("user").trim().notEmpty().escape(),
  body("text").trim().notEmpty().escape(),
];

// new messages routes

router.get("/", (req, res) => {
    res.render("new", { links: links, title:links[1].text, messages: messages});
});

/*  sintaxis sin utilizar validacion
router.post("/", (req, res) => {
  const { user, text } = req.body ;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect("/");
});
*/

router.post("/", [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('error - not valid');
    }
    const { user, text } = req.body;
    messages.push({ text: text, user: user, added: new Date() });
    res.redirect("/");
  }
]);


router.get("/:id", (req, res) => {
    const id = req.params.id;
    switch(messages[id-1]!==undefined){
      case true:
        res.render("details", { links: links, title:`message ${id}`, messages: messages, id:id});
      break;
      case false:
        res.status(404).render("404", { links: links, title: "404" });
      break;
    }

});


module.exports = router;