import * as allClients from '../repositories/clients.repositories.js'

async function postClients (req, res) {
  const { name, address, phone } = req.body
  console.log(req.body)
  try {
    const queryClients = await allClients.postClientsRepository({ name, address, phone })
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
}

async function getClientsOrdersController(req, res) {
  const { id } = req.params
  let idConvert = Number(id)
  if(!idConvert) return res.status(404).send('id is required')
  try {
    const queryOrders = await allClients.getClientsOrdersRepository(id)
    if(!queryOrders.rows.length){
     return res.sendStatus(404) 
    }
    console.log(queryOrders.rows)
    return res.send(queryOrders.rows)
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
}



export { postClients, getClientsOrdersController }