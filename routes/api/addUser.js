const express = require('express');
const axios = require('../../config/axiosConfig');
const router = module.exports = express.Router();
const addUser = require('../../util/addUser')

router.route('/api/addUser/:listId')
    .post((req, res) => {
        addUser(req, res, axios);
    })