import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:process.env.CLOUDINARY_API_NAME, 
    api_secret:process.env.CLOUDINAR_API_SECRET_KEY
});

const uploadOnCloudinary=async (localFilePath)=>{
    try {
        if(!localFilePath) return null;
        //upload file on cloudinary

        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"

        })
        //file successfully uploaded
        console.log("file is successfully uploaded",response.url)
        return response;


        
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove locally saved temp file as the upload operation failed
        //throw error

       return null;
    }
}

export {uploadOnCloudinary}
