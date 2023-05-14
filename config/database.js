import mongoose from "mongoose";
import colors from "colors"

const connectDB = async()=>{
    
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            dbName:"upni_dukan",
            useUnifiedTopology:true,
            useNewUrlParser : true,
            
        })
        
        console.log(12)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(error){
        console.log(11)
        console.log(`Error:${error.message}`.red)
        process.exit(1)
    }
}

export default connectDB