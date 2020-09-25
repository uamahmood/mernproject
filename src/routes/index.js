const express = require("express");
const router = express.Router();

router.use('/users', require("../routes/user"));
router.use('/volunteers', require("../routes/volunteer"))

module.exports =router;