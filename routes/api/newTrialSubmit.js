const express = require('express');
const axios = require('../../config/axiosConfig');
const router = module.exports = express.Router();
const addOrUpdateUser = require('../../util/addOrUpdateUser');

/**
 * @swagger
 *
 * paths:
 *   /api/newTrialSubmit:
 *     post:
 *       summary: Creates or Updates User
 *       consumes:
 *         - application/json
 *       produces:
 *         - application/json
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Event message signaling that the newTrialSubmit event has been triggered
 */

router.route('/api/newTrialSubmit')
    .post((req, res) => {
        addOrUpdateUser(req, res, axios);
    })