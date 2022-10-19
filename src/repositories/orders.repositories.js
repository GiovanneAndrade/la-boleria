import  connection from '../database/db.js'


async function getOrderRepository(){
  const queryOrders = await connection.query(
    `
      SELECT * FROM orders;
    `
  )
  return queryOrders
}
export { getOrderRepository }