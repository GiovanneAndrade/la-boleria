import  connection from '../database/db.js'


async function postCakesRepository({name, price, image, description}){
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

async function getCakesRepository(cakeId){
  const queryCakes =  await connection.query(
    `
      select * from cakes where id = ${cakeId}
    ` 
  )
  return queryCakes
}
export { postCakesRepository, getCakesRepository }