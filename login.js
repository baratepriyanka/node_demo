const express = require('express')
const loginController= require('../Controller/logincontroller');
var router = express.Router();

router.get('/all',loginController.getAll)
router.get('/alldata',loginController.getAllData)

module.exports=router