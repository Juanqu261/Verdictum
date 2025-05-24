import express from 'express';
import { getProcessByRadicado } from './controller';

const router = express.Router();
router.get('/:radicado', getProcessByRadicado);

export default router;
