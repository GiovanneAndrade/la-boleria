import { Router } from "express"
import { postClients } from "../controllers/clients.controller.js"

const router = Router()

router.post('/clients', postClients)


export default router