import express from 'express';
const router = express.Router();
import { authenticateToken } from '../middleware/auth';
import {  CardOTPPayment, CardPayment, CardPinPayment, Checkout} from '../controllers/Collection/collection';

router.post('/create-charge',authenticateToken, Checkout)
router.post('/charge',authenticateToken, CardPayment)
router.post('/verify-pin',authenticateToken, CardPinPayment)
router.post('/verify-otp',authenticateToken, CardOTPPayment)






export default router;