const express = require('express');
const axios = require('../../config/axiosConfig');
const router = module.exports = express.Router();
const getUsers = require('../../util/getUsers')
const getUser = require('../../util/getUser');

// router.route('/api/getUsers/:listId')
//     .get((req, res) => {
//         getUsers(req, res, axios).then(users => {res.send(users)});
//     })
//
// router.route('/api/getUser')
//     .post((req, res) => {
//         getUser(req, res, axios).then(user => {res.send(user)});
//     })