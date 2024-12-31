import express from "express"
import authMiddleware from "../Middleware/auth.js"
import { listOrders, placeOrder, updateStatus, usersOrders, verifyOrder } from "../Controller/orderController.js"


const orderRouter = express.Router();

//creating endpoints

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify",verifyOrder);

orderRouter.post('/userorders',authMiddleware,usersOrders);
orderRouter.get('/list',listOrders);
orderRouter.post('/status',updateStatus);
export default orderRouter;