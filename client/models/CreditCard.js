const mongoose=require('mongoose')

const cardDetails=mongoose.Schema({

    cardName:{
        type:String,
        required:true
    },
    catergory:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    img:{
        type:String,
    },
    features:[{
       type:String,
    }],
  
   eligibility:[{
     type:String
   }],
    document:[{
        type:String,
    }],
    charge:[{

    }],
    faq:[{
        type:String,
    }],
    faqAns:[{
        type:String,
    }]
})
const CardDetails=mongoose.model('cardDetails',cardDetails);
module.exports=CardDetails;