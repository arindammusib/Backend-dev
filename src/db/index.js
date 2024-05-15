import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const dbConnection=async ()=>{

    try{

        const connectionInstance=await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
        console.log(`Connection successful..DB host:,${connectionInstance.connection.host}`)
        

    }catch(error){
            console.log("Database connection failed!!",error)
            process.exit(1)
    }
}
export default dbConnection