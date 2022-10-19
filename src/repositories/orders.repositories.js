import  connection from '../database/db.js'


async function getOrderRepository(){
  const queryOrders = await connection.query(
    `
      SELECT * FROM orders;
    `
  )
  return queryOrders
}


async function postOrderRepository({clientId, cakeId, quantity,createdAt,totalPrice}){
  const queryOrders = await connection.query(
    `
     INSERT INTO orders (
      "clientId", 
      "cakeId", 
      quantity,
      "createdAt",
      "totalPrice"
      )
       VALUES ($1, $2, $3, $4, $5)
    `,
    [clientId, cakeId, quantity,createdAt,totalPrice]
  )
  return queryOrders
}

async function getClientsOrdersRepository(id){
  const queryOrders = await connection.query(
    `
    select  orders.id AS "orderId", orders.quantity, orders."createdAt", orders."totalPrice", cakes."name" AS "cakeName" from cakes
    inner join orders
    on cakes.id = orders."cakeId" where orders.id = ${id};
    ` 
  )
  return queryOrders
}

export { getOrderRepository, postOrderRepository, getClientsOrdersRepository }

 