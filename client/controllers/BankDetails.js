const express=require('express');
const BankDetails=require('../models/bank')

const dataPost= async(req,res)=>{
    try {
        const newBankDetails =new BankDetails({
            
            bankName:req.body.bankName,
            description:req.body.description,
            features: {
                point1: req.body.features.point1,
                point2: req.body.features.point2,
                point3: req.body.features.point3,
                point4: req.body.features.point4,
                point5: req.body.features.point5,
                point6: req.body.features.point6,
                point7: req.body.features.point7,
                point8: req.body.features.point8,
                point9: req.body.features.point9,
                point10: req.body.features.point10,
            },
            cards: {
                card1: req.body.cards.card1,
                card2: req.body.cards.card2,
                card3: req.body.cards.card3,
                card4: req.body.cards.card4,
                card5: req.body.cards.card5,
            },
            benfits: {
                point1: req.body.benfits.point1,
                point2: req.body.benfits.point2,
                point3: req.body.benfits.point3,
                point4: req.body.benfits.point4,
                point5: req.body.benfits.point5,
                point6: req.body.benfits.point6,
                point7: req.body.benfits.point7,
                point8: req.body.benfits.point8,
                point9: req.body.benfits.point9,
                point10: req.body.benfits.point10,
            },
            faq: {
                point1: req.body.faq.point1,
                point2: req.body.faq.point2,
                point3: req.body.faq.point3,
                point4: req.body.faq.point4,
                point5: req.body.faq.point5,
            },
            faqAns: {
                point1: req.body.faqAns.point1,
                point2: req.body.faqAns.point2,
                point3: req.body.faqAns.point3,
                point4: req.body.faqAns.point4,
                point5: req.body.faqAns.point5,
            },
        })
        await newBankDetails.save()
        res.status(200).json({message:'Bank Data saved successfully'})
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
}
const dataGet=async(req,res)=>{
    try{
        const allBankDetails=await BankDetails.find();
        
        res.status(200).json(allBankDetails)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

const specficDataGet=async(req,res)=>{
    const {bankName}=req.params
    try {
      

        const foundData=await BankDetails.findOne({bankName});

        if(!foundData){
            return res.status(404).json({message:'Bank Data Not Found'});
        }
        res.status(200).json(foundData)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports={dataPost,dataGet,specficDataGet}