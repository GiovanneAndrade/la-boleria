import { Router } from "express";
import { 
  getClientsOrdersController, 
  getIddOrdersController, 
  getDateOrdersController, 
  postOrdersController 
} from "../controllers/orders.controllers.js";

const router = Router();

router.get('/orders', getDateOrdersController)
router.get('/orders/:id', getIddOrdersController)
router.post('/orders', postOrdersController)
router.get('/clients/:id/orders', getClientsOrdersController)

export default router