import  connection from '../database/db.js'


async function getDateOrderRepository(){
  const queryOrders = await connection.query(
    `
      select 
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
     from cakes  
      inner join orders
      on cakes.id = orders."cakeId"
      inner join  clients
      on clients.id = orders."clientId" where orders."createdAt" = '2022-10-20 19:32:00';
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

export { getDateOrderRepository, postOrderRepository, getClientsOrdersRepository }

 