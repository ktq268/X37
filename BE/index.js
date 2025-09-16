import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './src/routes/index.js';


dotenv.config();
const app = express();
connectDB();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api', router);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
