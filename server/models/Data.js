const mongoose=require('mongoose')

const dataSchema=mongoose.Schema({
    
    cardName:{
        type:String,
        required:true,
    },
    annualFee:{
        type:String,
        required:true,
    },
    rewards:{
        type:String,
        
    },
    benfits:{
        type:String,
    },

})
const DataSchema=mongoose.model('data',dataSchema)

module.exports=DataSchema