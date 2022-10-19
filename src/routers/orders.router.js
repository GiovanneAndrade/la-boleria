import { Router } from "express"
import { getClientsOrders, getOrders, postOrders } from "../controllers/orders.controllers.js"

const router = Router()

router.get('/orders', getOrders)
router.post('/orders', postOrders)
router.get('/clients/:id/orders', getClientsOrders)

export default router