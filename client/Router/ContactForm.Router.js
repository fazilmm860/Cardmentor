const express=require('express')

const {formPost,formGet}=require('../controllers/contactForm')

const router=express.Router()

router.post('/postform',formPost);
router.get('/getform',formGet);

module.exports=router;