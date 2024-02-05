const contactform=require('../models/contactForm');

const formPost=async(req,res)=>{
    try{
        const newContactForm= new contactform({

            name:req.body.name,
            mobile:req.body.mobile,
            email:req.body.email,
            message:req.body.message,
        })
        await newContactForm.save()
        res.status(200).json(newContactForm)
    }
    catch(error){
        res.status(500).json({message:error.message})

    }
}
const formGet=async(req,res)=>{
    try{
        const allFormGet= await contactform.find()

        res.status(200).json(allFormGet)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports={formPost,formGet}