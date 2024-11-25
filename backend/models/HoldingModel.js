const {model} =require('mongoose')
const { HoldingSchema } = require('../schemas/HoldingSchemas')

const HoldingModel=new model('Holding',HoldingSchema)

module.exports=HoldingModel