class ApiResponse{
    constructer(statusCode,message="success",data){
        this.statusCode=statusCode<400
        this.message=message
        this.success=statusCode<400
        this.data=data
    }
}
export {ApiResponse}