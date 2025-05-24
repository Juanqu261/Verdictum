import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    mensaje: 'Ruta /usuarios activa desde el microservicio TypeScript 🚀',
  });
});

export default router;
