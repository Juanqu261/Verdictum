import { Request, Response } from 'express';
import { fetchProcessByRadicado } from './service';

export const getProcessByRadicado = async (req: Request, res: Response) => {
  const { radicado } = req.params;

  try {
    const result = await fetchProcessByRadicado(radicado);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching process data' });
  }
};
