import mongoose from 'mongoose';

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://DONKEYKONG:DONKEYKONG@cluster0.znhez.mongodb.net/food-del').then(() => {
        console.log('MongoDB Connected');
    }); 
}