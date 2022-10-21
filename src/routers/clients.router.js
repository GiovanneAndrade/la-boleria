import { Router } from "express"
import { getClientsOrdersController, postClients } from "../controllers/clients.controller.js"

const router = Router()

router.post('/clients', postClients)
router.get('/clients/:id/orders', getClientsOrdersController)


export default router