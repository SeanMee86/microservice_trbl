const express = require('express');
const axios = require('../../config/axiosConfig');
const router = module.exports = express.Router();
const addUser = require('../../util/addUser')
const addOrUpdateUser = require('../../util/addOrUpdateUser');

router.route('/api/addUser/:listId')
    .post((req, res) => {
        addUser(req, res, axios);
    })

router.route('/api/addUser')
    .post((req, res) => {
        addOrUpdateUser(req, res, axios);
    })