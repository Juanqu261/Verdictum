import express from 'express';
import cors from 'cors';
import processRoutes from './process/routes';
import actuacionesRoutes from './actuaciones/routes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/process', processRoutes);
app.use('/actuaciones', actuacionesRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
