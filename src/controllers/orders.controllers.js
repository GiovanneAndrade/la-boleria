
import * as allOrders from '../repositories/orders.repositories.js'
import * as allCakes from '../repositories/cakes.repositories.js'
import dayjs from 'dayjs'

async function queryOrdersController ({dateOrId,queryDateOrId}){

  const queryOrders = await allOrders.getDateOrderRepository({dateOrId, queryDateOrId})
  

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
 if(!date) return res.sendStatus(404)
 const dateOrId = date
 const queryDateOrId = `date (orders."createdAt")`
  try {
    const ordersList = await queryOrdersController({dateOrId,queryDateOrId})
    if(ordersList.length === 0) return res.status(404).send(ordersList)
         
    return res.send(ordersList)
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
}


async function getIddOrdersController (req, res) {
  let { id }  = req.params
  
  let dateOrId = id
  const queryDateOrId = `orders.id`
   try {
     const ordersList = await queryOrdersController({queryDateOrId,dateOrId})
     if(ordersList.length === 0) return res.sendStatus(404)
     return res.send(ordersList)
   } catch (error) {
     return res.sendStatus(500).send(error)
   }
 } 


async function postOrdersController(req, res) {
  const { clientId, cakeId, quantity } = req.body
  const  cakeIdOrname = cakeId
  const nameOrId = 'id'
  const queryCakeId = await allCakes.getCakesRepository( {cakeIdOrname, nameOrId} )
  let totalPrice = (Number(queryCakeId.rows[0].price) * quantity)
  const createdAt = dayjs().format('DD-MM-YYYY HH:mm')
  try {
    const queryOrders = await allOrders.postOrderRepository(
      { clientId, cakeId, quantity, createdAt, totalPrice }
    )
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
}


export { 
  getDateOrdersController,
  postOrdersController, 
  getIddOrdersController 
 }

