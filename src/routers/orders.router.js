import { Router } from "express";
import { postOrdersMiddlewares } from "../middlewares/orders.middlewares.js";
import { 
  getIddOrdersController, 
  getDateOrdersController, 
  postOrdersController 
} from "../controllers/orders.controllers.js";


const router = Router();

router.post('/order', postOrdersMiddlewares, postOrdersController)
router.get('/orders', getDateOrdersController)
router.get('/orders/:id', getIddOrdersController)



export default router