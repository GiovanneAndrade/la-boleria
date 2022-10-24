import  express  from "express";
import dotenv from 'dotenv';
import ordersRouter from './routers/orders.router.js';
import cakesRouter from './routers/cakes.router.js';
import clientsRouter from './routers/clients.router.js';
const app = express();
app.use(express.json());
dotenv.config();



app.use(ordersRouter)
app.use(cakesRouter)
app.use(clientsRouter)

app.listen(4000, ()=>{
  console.log('ok')
})