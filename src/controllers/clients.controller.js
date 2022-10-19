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

export { postClients }