import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './src/routes/index.js';

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// dùng routes
app.use('/api', router);

// xuất app cho Vercel (không dùng app.listen)
export default app;
