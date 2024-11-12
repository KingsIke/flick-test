import express from 'express';
const router = express.Router();
import { Balance, Connect, Identity,  Statement, Transaction } from '../controllers/FinancialData/connect';
import { authenticateToken } from '../middleware/auth';
// import { Verification } from '../controllers/Identity/kyc';


router.post('/initialize',authenticateToken, Connect)
router.post('/balance', authenticateToken, Balance)
router.post('/statement', authenticateToken, Statement)
router.post('/identity', authenticateToken, Identity)
router.post('/transactions', authenticateToken, Transaction)




export default router;