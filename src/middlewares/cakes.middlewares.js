import postCakeSchema from "../schema/cakes.schema.js"
import * as allCakes from '../repositories/cakes.repositories.js'

async function postOrdersMiddlewares (req, res, next) { 
  const cakeIdOrname = req.body.name
  const nameOrId = 'name'
  const validateOrder = postCakeSchema.validate(req.body, {abortEarly: false})
  try {
    if(validateOrder.error){
      const erro = validateOrder.error.details.map((err) => err.message)
      return res.status(400).send(erro)
    }
    const queryCakeId = await allCakes.getCakesRepository( {nameOrId, cakeIdOrname }) 
    if(queryCakeId.rows.length > 0) return res.sendStatus(404) 
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
  next()
}

export { postOrdersMiddlewares }

