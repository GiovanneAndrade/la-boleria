import  connection from '../database/db.js'

async function getDateOrderRepository({queryDateOrId, dateOrId}){
  const queryOrders = await connection.query(
    `
      SELECT
        clients.id,
        clients.name,
        clients.address, 
        clients.phone, 
          cakes.id as cakeId, 
          cakes.name,
          cakes.price,
          cakes.description,
          cakes.image,
            orders.id as orderId,
            orders."createdAt",
            orders."quantity",
            orders."totalPrice"
     FROM cakes  
      INNER JOIN orders
      on cakes.id = orders."cakeId"
      INNER JOIN  clients
      on clients.id = orders."clientId" WHERE ${queryDateOrId} = $1;
    `,[dateOrId]
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


export { getDateOrderRepository, postOrderRepository }

 