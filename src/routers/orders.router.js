import { Router } from "express";
import { getDatedOrdersMiddlewares, getIddOrdersMiddlewares, postOrdersMiddlewares } from "../middlewares/orders.middlewares.js";
import { 
  getIddOrdersController, 
  getDateOrdersController, 
  postOrdersController 
} from "../controllers/orders.controllers.js";


const router = Router();

router.post('/order', postOrdersMiddlewares, postOrdersController)
router.get('/orders', getDatedOrdersMiddlewares, getDateOrdersController)
router.get('/orders/:id', getIddOrdersMiddlewares, getIddOrdersController)



export default router