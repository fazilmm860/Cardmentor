const mongoose=require('mongoose')

const connection=async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI)
       console.log('MongoDB connected successfully');
    }catch(error){
        console.error(error);
    }
}

module.exports=connection;