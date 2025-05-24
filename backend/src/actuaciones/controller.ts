import { Request, Response } from 'express';
import { fetchActuacionesByProcesoId } from './service';

export const getActuacionesByProcesoId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await fetchActuacionesByProcesoId(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching actuaciones data' });
  }
};
