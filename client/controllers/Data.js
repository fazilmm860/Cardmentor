const express=require('express');
const Data=require('../models/Data')

const dataPost= async(req,res)=>{
    try {
        const newData =new Data({
            
            cardName:req.body.cardName,
            annualFee:req.body.annualFee,
            rewards:req.body.rewards,
            benfits:req.body.benfits

        })
        await newData.save()
        res.status(200).json({message:'Data saved successfully'})
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
}
const dataGet=async(req,res)=>{
    try{
        const allData=await Data.find();
        
        res.status(200).json(allData)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

const specficDataGet=async(req,res)=>{
    const {cardName}=req.params
    try {
      

        const foundData=await Data.findOne({cardName});

        if(!foundData){
            return res.status(404).json({message:'Data Not Found'});
        }
        res.status(200).json(foundData)
    } catch (error) {     
        res.status(500).json({message:error.message})
    }
}

module.exports={dataPost,dataGet,specficDataGet}