const mongoose=require('mongoose')

const bankDetails=mongoose.Schema({

    bankName:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    features:{
        point1:{
            type:String,
        },
        point2:{
            type:String,
        },
        point3:{
            type:String,
        },
        point4:{
            type:String,
        },
        point5:{
            type:String,
        },
        point6:{
            type:String,
        },
        point7:{
            type:String,
        },
        point8:{
            type:String,
        },
        point9:{
            type:String,
        },
        point10:{
            type:String,
        },
    },
    cards:{
        card1:{
            type:String,
        },
        card2:{
            type:String,
        },
        card3:{
            type:String,
        },
        card4:{
            type:String,
        },
        card5:{
            type:String,
        },
    },
    benfits:{
        point1:{
            type:String,
        },
        point2:{
            type:String,
        },
        point3:{
            type:String,
        },
        point4:{
            type:String,
        },
        point5:{
            type:String,
        },
        point6:{
            type:String,
        },
        point7:{
            type:String,
        },
        point8:{
            type:String,
        },
        point9:{
            type:String,
        },
        point10:{
            type:String,
        },
    },
    faq:{
        point1:{
            type:String,
        },
        point2:{
            type:String,
        },
        point3:{
            type:String,
        },
        point4:{
            type:String,
        },
        point5:{
            type:String,
        },
    },
    faqAns:{
        point1:{
            type:String,
        },
        point2:{
            type:String,
        },
        point3:{
            type:String,
        },
        point4:{
            type:String,
        },
        point5:{
            type:String,
        },
    },
})
const BankDetails=mongoose.model('bankDetails',bankDetails);
module.exports=BankDetails;