import { Router } from "express";
import { 
  getIddOrdersController, 
  getDateOrdersController, 
  postOrdersController 
} from "../controllers/orders.controllers.js";

const router = Router();

router.post('/order', postOrdersController)
router.get('/orders', getDateOrdersController)
router.get('/orders/:id', getIddOrdersController)



export default router