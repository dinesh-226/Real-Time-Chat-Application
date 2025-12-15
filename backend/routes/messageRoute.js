const express = require('express');
const router = express.Router();
const {getMessage, postMessage} = require("../controllers/messageController");
const { protect } = require('../middleware/authMiddleware');

router.get("/",protect,getMessage);
router.post("/",protect,postMessage);

module.exports =  router;

