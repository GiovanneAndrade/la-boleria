
import * as allOrders from '../repositories/orders.repositories.js'
import * as allCakes from '../repositories/cakes.repositories.js'
import dayjs from 'dayjs'
async function getODaterdersController(req, res) {
  try {
    const queryOrders = await allOrders.getDateOrderRepository()
    const orders = queryOrders.rows.map(
      order => (
          {
              clients: {
                  id: order.id,
                  name: order.name,
                  address: order.address,
                  phone: order.phone
              },
              cake: {
                  id: order.cakeid,
                  name: order.name,
                  price: order.price,
                  description: order.description,
                  image: order.image
              },
              orderId: order.orderid,
              createdAt: order.createdAt,
              quantity: order.quantity,
              totalPrice: order.totalPrice
          }
      )
  )
  console.log(queryOrders.rows)
    return res.send(orders)
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

export { getODaterdersController, postOrdersController, getClientsOrdersController }

