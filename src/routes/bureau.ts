import express from 'express';
const router = express.Router();

import { authenticateToken } from '../middleware/auth';
import { BusinessReport, IndividualReport } from '../controllers/FinancialData/connect';


router.post('/process-report', authenticateToken, IndividualReport)
router.post('/business-report', authenticateToken, BusinessReport)



export default router;