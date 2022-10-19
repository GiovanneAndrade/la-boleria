import { Router } from "express"
import { getCakes } from "../controllers/cakes.controller.js"


const router = Router()

router.post('/cakes', getCakes)


export default router