import express from 'express';
import dotenv from 'dotenv';
import usuariosRoutes from './routes/usuarios.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta de prueba
app.use('/usuarios', usuariosRoutes);

app.get('/', (_req, res) => {
  res.send('Microservicio backend en TypeScript activo ✅');
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
