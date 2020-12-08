const express = require('express');
require('dotenv').config();
const axios = require('../../config/axiosConfig');
const router = module.exports = express.Router();
const getUsers = require('../../util/getUsers')

router.route('/api/getUsers/:listId')
    .get((req, res) => {
        getUsers(req, res, axios).then(users => {res.send(users)});
    })