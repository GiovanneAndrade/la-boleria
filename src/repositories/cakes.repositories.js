import  connection from '../database/db.js'


async function postCakesRepository(name, price, image, description){
  const queryCakes =  await connection.query(
    `
      INSERT INTO cakes (
        name,
        price,
        image,
        description
      ) 
        VALUES ($1,$2, $3, $4)
    `, 
    [ name, price, image, description]
  )
  return queryCakes
}
export { postCakesRepository }