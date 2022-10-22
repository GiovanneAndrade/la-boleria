import postClientSchema from "../schema/clients.schema.js"
 

async function postClientMiddlewares (req, res, next) {
const { name, address, phone } = req.body
 


  const validateOrder = postClientSchema.validate(req.body, {abortEarly: false})
  try {
    if(validateOrder.error){
      const erro = validateOrder.error.details.map((err) => err.message)
      return res.status(400).send(erro)
    }
  
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
  next()
}

export { postClientMiddlewares }