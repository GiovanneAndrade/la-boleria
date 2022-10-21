
async function postOrdersMiddlewares (req, res, next) {
  console.log(req.body)
  try {
    
  } catch (error) {
    return res.sendStatus(500).send(error)
  }
  next()
}

export { postOrdersMiddlewares }