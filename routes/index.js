const express = require("express");
const router = module.exports = express.Router();

router.use(require('./api/newTrialSubmit'))
