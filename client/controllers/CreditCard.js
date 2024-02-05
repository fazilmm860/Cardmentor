    const express=require('express');
    const CreditCard=require('../models/CreditCard')

    const dataPost= async(req,res)=>{
        try {
            const newCreditCard =new CreditCard({
                cardName:req.body.cardName,
                catergory:req.body.catergory,
                description:req.body.description,
                img:req.body.img,
                features: req.body.features,
                eligibility: req.body.eligibility,
                document:req.body.document,
                charge:req.body.charge,
                faq:req.body.faq,       
                faqAns: req.body.faqAns
            })
            await newCreditCard.save()
            res.status(200).json({message:'Card Data saved successfully'})
        } catch (error) {
            res.status(400).json({message:error.message})
            
        }
    }
    const dataGet=async(req,res)=>{
        try{
            const allCreditCard=await CreditCard.find();
            
            res.status(200).json(allCreditCard)
        }
        catch(error){
            res.status(400).json({message:error.message})
        }
    }

    const specficDataGet=async(req,res)=>{
        const {cardName}=req.params
        try {
        

            const foundData=await CreditCard.findOne({cardName});

            if(!foundData){
                return res.status(404).json({message:'Card Data Not Found'});
            }
            res.status(200).json(foundData)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
    const getSpecificCard=async(req,res)=>{
        try{
            const {catergory}=req.params;

            //find cards with the same catergory name
            const cards=await CreditCard.find({catergory:catergory})
            res.status(200).json(cards)
        }catch(error){
            res.status(404).json({message:error.message})
        }
    }
    const editCreditCard=async(req,res)=>{
        try{
            const cardId=req.params.id;

            const updateCreditCard={
                cardName:req.body.cardName,
                catergory:req.body.catergory,
                description: req.body.description,
                img: req.body.img,
                features: req.body.features,
                eligibility: req.body.eligibility,
                document: req.body.document,
                charge: req.body.charge,
                faq: req.body.faq,
                faqAns: req.body.faqAns
            }

            // Find the card by ID and Update the data
            const card=await CreditCard.findByIdAndUpdate(cardId,updateCreditCard,{new:true});

            if(!card){
                return res.status(404).json({message:'Card Not Found'})
            }
            res.status(200).json({message:"Card Data updated successfully"})
        }catch (error){
            res.status(400).json({message:error.message});
        }
    };
    const deleteCreditCard=async(req,res)=>{
        try {
            const cardId=req.params.id;

            // find the card by Id and Delete it

            const deletedCard=await CreditCard.findByIdAndDelete(cardId);

            if(!deletedCard){
                return res.status(404).json({message:'Card Not Found'});
            }
            res.status(200).json({message:'Card Data deleted Successfully',data:deletedCard});
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }
    module.exports={dataPost,dataGet,specficDataGet,editCreditCard,deleteCreditCard,getSpecificCard}