import { Router } from "express"
import { getClientsOrdersController, postClients } from "../controllers/clients.controller.js"
import { postClientMiddlewares } from "../middlewares/clients.middlewares.js"

const router = Router()

router.post('/clients', postClientMiddlewares, postClients)
router.get('/clients/:id/orders', getClientsOrdersController)


export default router