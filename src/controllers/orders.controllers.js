
import * as allOrders from '../repositories/orders.repositories.js'
import * as allCakes from '../repositories/cakes.repositories.js'
import dayjs from 'dayjs'

async function queryOrdersController (dateOrId,queryDateOrId){
 
  const queryOrders = await allOrders.getDateOrderRepository(dateOrId, queryDateOrId)
  const ordersList = queryOrders.rows.map(
    i => (
      {
        clients: {
          id: i.id,
          name: i.name,
          address: i.address,
          phone: i.phone
        },
        cake: {
          id: i.cakeid,
          name: i.name,
          price: i.price,
          description: i.description,
          image: i.image
        },
        orderId: i.orderid,
        createdAt: i.createdAt,
        quantity: i.quantity,
        totalPrice: i.totalPrice
      }
    )
)
   return ordersList
}

async function getDateOrdersController(req, res) {
 const { date } = req.query
 const dateOrId = date
 const queryDateOrId = `date (orders."createdAt")`
  try {
    const ordersList = await queryOrdersController(dateOrId,queryDateOrId)
    return res.send(ordersList)
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
}


async function getIddOrdersController (req, res) {
  let { id }  = req.params
  let dateOrId = id
  const queryDateOrId = `clients.id`
   try {
     const ordersList = await queryOrdersController(dateOrId,queryDateOrId)
     return res.send(ordersList)
   } catch (error) {
     return res.sendStatus(500).send(error)
   }
 }


async function postOrdersController(req, res) {
  const { clientId, cakeId, quantity } = req.body
  const queryCakeId = await allCakes.getCakesRepository( cakeId )
  let totalPrice = (Number(queryCakeId.rows[0].price) * quantity)
  const createdAt = dayjs().format('DD-MM-YYYY HH:mm')
  
  try {
    const queryOrders = await allOrders.postOrderRepository({clientId, cakeId, quantity,createdAt,totalPrice})
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
}

async function getClientsOrdersController(req, res) {
  const { id } = req.params
 console.log(id)
  try {
    const queryOrders = await allOrders.getClientsOrdersRepository(id)
    return res.send(queryOrders.rows)
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
}

export { 
  getDateOrdersController,
  postOrdersController, 
  getClientsOrdersController, 
  getIddOrdersController 
 }

