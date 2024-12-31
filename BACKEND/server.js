import express from 'express';
import cors from 'cors';
import { connectDB } from './Config/db.js';
import foodRouter from './Routes/foodRoute.js';
import userRouter from './Routes/userRoute.js';
import 'dotenv/config';
import cartRouter from './Routes/cartRoute.js';
import orderRouter from './Routes/orderRoute.js';
//app config
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());

// DB Connnection
 connectDB(); 

//API ENDPOINTS
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);

app.get('/', (req, res) => {
  res.send('API WORKING');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//mongodb+srv://DONKEYKONG:<db_password>@cluster0.znhez.mongodb.net/?