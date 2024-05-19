# Backend

- Basic configs
   - folder structure
      - src
        - controllers
        - db
        - middlewares
        - models
        - routes
        - utils

- Created model
  -usermodel
    - configure bcrypt and JWT
  -video model

- Basic setup for API handling
   - apiErrors
   - apiResponse
   - asyncHandler
   - cloudinary for storing files

- middleware configuration
  - configure multer
  - Register a user
    - get user details from yhe frontend
    - validate the user credentials (non empty or structured)
    - check if user isalready registered througt usernae,emai
    - check fro images,avatar
    - upload them to cloudinary
    - create an  object- create entry into db
    - remove password and refresh token field from the res
    - check for user creation
    - return res
  






