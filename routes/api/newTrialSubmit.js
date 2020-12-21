const express = require('express');
const router = module.exports = express.Router();

/**
 * @swagger
 *
 * paths:
 *   /api/testing:
 *     get:
 *       summary: Testing EBS
 *       produces:
 *         - application/json
 *       responses:
 *         '200':
 *           description: message that request has worked
 */

router.route('/api/testing')
    .get((req, res) => {
        res.send(process.env.SOME_KEY)
    })
