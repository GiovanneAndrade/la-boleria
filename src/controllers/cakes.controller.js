
import * as allCakes from '../repositories/cakes.repositories.js'

async function getCakes (req, res) {
  const { name, price, image, description} = req.body
  console.log(name)
  try {
    const queryCakes = await allCakes.postCakesRepository(name, price, image, description)
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
}

export { getCakes }