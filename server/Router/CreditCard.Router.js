const express=require('express');
const { dataPost, dataGet, specficDataGet,editCreditCard,deleteCreditCard,getSpecificCard } = require('../controllers/CreditCard');

const router=express.Router()

router.post('/postcreditcard',dataPost);
router.get('/getcreditcard',dataGet);
router.get('/getSpecificreditcard/:cardName',specficDataGet);
router.put('/editcard/:id',editCreditCard);
router.delete('/delete/:id',deleteCreditCard);
router.get('/getcard/:catergory',getSpecificCard);

module.exports=router;