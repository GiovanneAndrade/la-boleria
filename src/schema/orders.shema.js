import joi from "joi"

const postOrderSchema = joi.object({
    clientId: joi.number().required(),
    cakeId: joi.number().required(),
    quantity: joi.number().min(1).max(5).required(),
})

export default postOrderSchema;