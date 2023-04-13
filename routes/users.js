var express = require('express');
var router = express.Router();


/**
 * @openai
 * 
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       properties:
 *         username:
 *           type: string 
 *         message:
 *           type: string
 *   /users/:
 *     get:
 *       description: fetch list of users - admin only
 *       responses:
 *         200:
 *           description: return list of users
 *            content:
 *              application/json:
 *                schema:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/user'
 */
router.get('/',(req, res, next) =>{
  let x = {msg:"please provide access token"}
  res.json(x).end();
});

module.exports = router;
