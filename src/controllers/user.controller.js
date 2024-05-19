import  {asyncHandler} from "../utils/asyncHandler.js";
import { ApiErrors } from "../utils/apiErrors.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from '../utils/cloudinary.js'
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser= asyncHandler(async(req,res)=>{

    const{email,userName,fullName,password}=req.body

    console.log("email:",email);

    //validation checking
    if(fullName===""){
        throw new ApiErrors(400,"full name is required")
    }else if(!email.includes("@")){
        throw new ApiErrors(400,"syntex is not valid")
    }
    
    //for existing user

    const existedUser=User.findOne({
        $or:[{userName},{email}]
    })

    if(existedUser){
        throw new ApiErrors(409,"This user is already exist")
    }

    const avatarLocalPath=req.files?.avatar[0]?.path;
    const coverImageLocalPath=req.files?.avatar[0]?.path;

    if(!avatarLocalPath){
        throw new ApiErrors(400,"avatar file is required");
    }

    //upload on cloudinary
    const avatar=await uploadOnCloudinary(avatarLocalPath)
    const coverImage=await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiErrors(400,"avatar file is required")
    }
    //entry in db

    const user=await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        userName:userName.toLowerCase(),
        email,
        password

    })

    const createdUser=await User.findById(user._id).select(
        "-password -refreshToken" //this two are not required
    )

    if(!createdUser){
        throw new ApiErrors(500,"something went wrong while registering the user")
    }

    //return response

    res.status(201).json(
        new ApiResponse(200,createdUser,"User registerd successfully")
    )


    

})

export {
    registerUser,
}