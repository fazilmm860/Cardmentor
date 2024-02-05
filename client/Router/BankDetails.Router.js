const express=require('express');
const { dataPost, dataGet, specficDataGet } = require('../controllers/BankDetails');

const router=express.Router()

router.post('/postbank',dataPost);
router.get('/getbank',dataGet);
router.get('/getSpecificbank/:bankName',specficDataGet)


module.exports=router;