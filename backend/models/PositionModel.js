const {model}=require('mongoose')
const { PositionSchema } = require('../schemas/PositionSchema')

const PostionModel=new model('Position',PositionSchema)

module.exports=PostionModel