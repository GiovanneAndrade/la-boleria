import joi from "joi"

const postOrderSchema = joi.object({
    clientId: joi.number().required(),
    cakeId: joi.number().required(),
    quantity: joi.number().min(1).max(5).required(),
})

const getOrderSchema = joi.object({
    id: joi.number().required()
})
const getClientSchema = joi.object({
    date: joi.string().min(10).max(10)
 })
  

export { postOrderSchema, getOrderSchema, getClientSchema}