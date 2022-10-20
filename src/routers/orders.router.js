import { Router } from "express";
import { 
  getClientsOrdersController, 
  getODaterdersController, 
  postOrdersController 
} from "../controllers/orders.controllers.js";

const router = Router();

router.get('/orders', getODaterdersController)
router.post('/orders', postOrdersController)
router.get('/clients/:id/orders', getClientsOrdersController)

export default router