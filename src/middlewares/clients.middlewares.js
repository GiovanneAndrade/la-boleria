import {postClientSchema} from "../schema/clients.schema.js"
 import * as allClients from '../repositories/clients.repositories.js'

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

async function getClientsOrdersMiddlewares  (req, res, next) {
  const clientId = req.params.id
  let idConvert = Number(clientId)
  if(!idConvert) return res.status(404).send('id is required')
    try {
      const queryOrders = await allClients.getClientsRepository(clientId)
      if(queryOrders.rows.length === 0) return res.sendStatus(404)
    } catch (error) {
      return res.sendStatus(500).send(error)
    }
    next()
  }
  

export { postClientMiddlewares, getClientsOrdersMiddlewares }