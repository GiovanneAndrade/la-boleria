import joi from "joi"

const postCakeSchema = joi.object({
    name: joi.string().trim().min(2).required() ,
    image: joi.string().trim().uri().required().min(1),
    price:joi.number().min(1).required(),
    description: joi.string()
})

export default postCakeSchema;