import joi from "joi"

const postClientSchema = joi.object({
name: joi.string().trim().required().min(1),
address: joi.string().trim().required(),
phone: joi.string().min(10).max(11).required()
})


export { postClientSchema };

