import express from 'express';
const router = express.Router();
import { authenticateToken } from '../middleware/auth';
import { TransationHistory } from '../controllers/Collection/collection';
import { Banks, CreateBeneficiary, GetBeneficiary, InitiatePayout, NameEnquiry, VerifyPayout } from '../controllers/Payout/payout';
import { Balance, ExchangeRate, TransmitKYB, WebhookResend } from '../controllers/MISC/misc';

// collection route
router.post('/transactions',authenticateToken, TransationHistory)

 // Payout route
router.get('/banks',authenticateToken, Banks)
router.post('/name-enquiry',authenticateToken, NameEnquiry)
router.get('/get-beneficiary',authenticateToken, GetBeneficiary)
router.post('/save-beneficiary',authenticateToken, CreateBeneficiary)

// MISC ROUTE

router.post('/merchant/transmit-kyb',authenticateToken, TransmitKYB)
router.get('/merchant/balances',authenticateToken, Balance)
router.get('/merchant/exchange-rate',authenticateToken, ExchangeRate)
router.post('/merchant/resend-webhook',authenticateToken, WebhookResend)








export default router;