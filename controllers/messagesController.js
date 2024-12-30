const db = require("../db/queries");
const { body, validationResult, query, matchedData } = require("express-validator");

const arrays = require('../arrays');
const { links } = arrays;


const validateUser = [
  body("userm").trim().notEmpty().escape().isLength({ min: 1, max: 20 }),
  body("textm").trim().notEmpty().escape().isLength({ min: 1, max: 40 }),
];

async function messageListGet(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { links: links, title: links[0].text, messages: messages });
}

async function newMessageGet(req, res) {
  res.render("new", { links: links, title: links[1].text });
}

// MODIFICAR AGREGAR CON UN QUERY
const newMessagePost = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('error - not valid');
    }
    const { textm, userm } = req.body;
    const added = new Date();
    const messageToAdd = { textm: textm, userm: userm, added: added.toLocaleString('en-US', { timeZone: 'America/Guayaquil' }) };
    console.log(messageToAdd);
    await db.insertMessage(messageToAdd);
    res.redirect("/");
  }
];

async function detailsMessage(req, res) {
  const id = req.params.id;
  const [message] = await db.selectMessage(id);

  switch (message !== undefined) {
    case true:
      res.render("details", { links: links, title: `message ${id}`, message: message });
      break;
    case false:
      res.status(404).render("404", { links: links, title: "404" });
      break;
  }
}

module.exports = {
  messageListGet,
  newMessageGet,
  newMessagePost,
  detailsMessage
};