var express = require('express');
const { getAllUsers } = require('../models/users.model');
var router = express.Router();

/* GET users listing. */
router.get('/',async function(req, res) {
const result= await getAllUsers()
  res.json(result);
});

module.exports = router;
