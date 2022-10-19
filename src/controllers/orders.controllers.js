
import * as allOrders from '../repositories/orders.repositories.js'

async function getOrders(req, res) {
  try {
    const queryOrders = await allOrders.getOrderRepository()
    console.log(queryOrders.rows)
    return res.send(queryOrders.rows)
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
}

export { getOrders }