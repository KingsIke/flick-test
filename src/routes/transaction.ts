import express from 'express';
const router = express.Router();
import { authenticateToken } from '../middleware/auth';
import {TransationStatus} from '../controllers/MISC/misc';


router.post('/transaction/status',authenticateToken, TransationStatus)



export default router;
