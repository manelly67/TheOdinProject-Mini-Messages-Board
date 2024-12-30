// messagesRoutes.js
const express = require("express");
const messagesController = require("../controllers/messagesController");
const router = express.Router();


router.get("/", messagesController.messageListGet);

router.get("/new", messagesController.newMessageGet);

router.post("/new", messagesController.newMessagePost);

router.get("/new/:id",messagesController.detailsMessage);


module.exports = router;