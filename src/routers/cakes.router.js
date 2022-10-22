import { Router } from "express"
import { getCakes } from "../controllers/cakes.controller.js"
import { postOrdersMiddlewares } from "../middlewares/cakes.middlewares.js"


const router = Router()

router.post('/cakes', postOrdersMiddlewares, getCakes)


export default router