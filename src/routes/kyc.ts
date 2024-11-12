import express from 'express';
const router = express.Router();
import { authenticateToken } from '../middleware/auth';
import { BVN,  NIN, PhoneNumber, } from '../controllers/Identity/kyc';


router.post('/bvn-:type',authenticateToken, BVN)
router.post('/phone-:type',authenticateToken, PhoneNumber)
router.post('/nin',authenticateToken, NIN)


export default router;
