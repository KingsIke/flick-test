import express from 'express';
const router = express.Router();
import { authenticateToken } from '../middleware/auth';
import { CACAdvance, CACBasic, TinVerification } from '../controllers/Identity/kyc';



router.post('/biz-basic',authenticateToken, CACBasic)
router.post('/biz-advance',authenticateToken, CACAdvance)
router.post('/tin-verification',authenticateToken, TinVerification)




export default router;
