import express from 'express'
import dbConnection from './db/index.js';
import dotenv from 'dotenv'

dotenv.config({
    path:'./env'
})


dbConnection()

// const dbConnection= async ()=>{
//     try{

//        await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("Err is:",error);
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening at ${process.env.PORT}`)
//        })
//     }catch(err){
//         console.log(err);
//     }

// }
// dbConnection();