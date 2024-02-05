const mongoose=require('mongoose');

const contactForm=mongoose.Schema({
    name:{
        type:String,
    },
    mobile:{
        type:String,
    },
    email:{
        type:String,
    },
    message:{
        type:String,
    }

    
})

const ContactForm=mongoose.model('contactForm',contactForm);

module.exports=ContactForm;