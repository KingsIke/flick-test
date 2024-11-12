import express from 'express';
const router = express.Router();
import { authenticateToken } from '../middleware/auth';
import { InitiatePayout, PayoutBeneficiary, VerifyPayout } from '../controllers/Payout/payout';



router.get('/verify/:id',authenticateToken, VerifyPayout)
router.post('/payout',authenticateToken, InitiatePayout)
router.post('/payout-beneficiary',authenticateToken, PayoutBeneficiary)




export default router;