import express from 'express';
import { getActuacionesByProcesoId } from './controller';

const router = express.Router();

router.get('/:id', getActuacionesByProcesoId);

export default router;
