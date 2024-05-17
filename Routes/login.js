const express = require('express')
const loginController= require('../Controller/logincontroller');
var router = express.Router();

router.get('/all',loginController.getAll)

module.exports=router