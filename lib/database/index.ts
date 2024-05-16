import mongoose from 'mongoose';


const MONGODG_URL = process.env.MONGODB_URL

export const connectToDatabase = async ()=>{
    const connectionState = mongoose.connection.readyState;
    if(connectionState === 1){
        console.log("Already connected")
        return;
    }
    if(connectionState == 2){
        console.log('Connecting....')
        return;
    }
    try{
        await mongoose.connect(MONGODG_URL!,{
            dbName:"SaintStream",
            bufferCommands:false
        })
    }catch(error){
        console.log('Error connecting to database',error)
        throw new Error("Error connecting to database")
    }
}