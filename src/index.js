//import express from 'express'
import dbConnection from './db/index.js'
import dotenv from 'dotenv'
import {app} from './app.js'

dotenv.config({
    path:'./env'
})


dbConnection().

then(()=>{
    app.on("error",(error)=>{
        console.log("Error occured");
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on ${process.env.PORT || 8000} `)
    })
})
.catch((error)=>{
    console.log("Mongodb connection failed",error);
})



