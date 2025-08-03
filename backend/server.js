import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import categoryRoutes from './routes/category.route.js'


dotenv.config();

const app = express();

app.use(express.json()); // Allow us to accept JSON data in req.body

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);


//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log('Server started at http://localhost:'+ PORT);
});