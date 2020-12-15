const express = require('express');
const axios = require('../../../config/axiosConfig');
const router = module.exports = express.Router();
const newUserSignup = require('../../../util/events/newUserSignup');

// router.route('/api/event/newUserSignup')
//     .post((req, res) => {
//         newUserSignup(req, res, axios);
//     })