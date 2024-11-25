const router=require('express').Router()
const {Signup, Login}=require('../Controllers/AuthController')
const bodyParser=require('body-parser')
const cors=require('cors')
const { userVerification } = require('../Middleware/AuthMiddleware')

router.post('/signup',Signup)
router.post('/login',Login)
router.post('/',userVerification)
module.exports=router