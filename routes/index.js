const express = require("express");
const router = module.exports = express.Router();

// router.use(require('./api/getUsers'))
router.use(require('./api/addUser'))
// router.use(require('./api/events/newUserSignup'))