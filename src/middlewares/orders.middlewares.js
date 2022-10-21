import postOrderSchema from "../schema/orders.shema.js"
import * as allCakes from '../repositories/cakes.repositories.js'
import * as allClients from '../repositories/clients.repositories.js'

async function postOrdersMiddlewares (req, res, next) {
  const { clientId, cakeId, quantity } = req.body

  const validateOrder = postOrderSchema.validate(req.body, {abortEarly: false})
  try {
    if(validateOrder.error){
      const erro = validateOrder.error.details.map((err) => err.message)
      return res.status(400).send(erro)
    }
    const queryCakeId = await allCakes.getCakesRepository( cakeId ) 
    if(queryCakeId.rows.length === 0) return res.sendStatus(404) 
    const queryClients = await allClients.getClientsRepository( clientId ) 
    if(queryClients.rows.length === 0) return res.sendStatus(404) 
   
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
  next()
}

export { postOrdersMiddlewares }