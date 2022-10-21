import  connection from '../database/db.js'


async function postClientsRepository({ name, address, phone }){
  const queryClients = await connection.query(
    `
     INSERT INTO clients (
        name, 
        address, 
        phone
      )
       VALUES ($1, $2, $3)
    `,
    [name, address, phone]
  )
  return queryClients
}

async function getClientsOrdersRepository(id){
  const queryOrders = await connection.query(
    `
    SELECT 
      orders.id AS "orderId", 
      orders.quantity, 
      orders."createdAt", 
      orders."totalPrice", 
      cakes."name" AS "cakeName" 
        FROM cakes
      INNER JOIN orders
        ON cakes.id = orders."cakeId" 
      WHERE orders.id = ${id};
    ` 
  )
  return queryOrders
}
export { postClientsRepository, getClientsOrdersRepository }

