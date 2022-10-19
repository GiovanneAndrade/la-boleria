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
export { postClientsRepository }

