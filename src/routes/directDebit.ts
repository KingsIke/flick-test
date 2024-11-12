import express from 'express';
const router = express.Router();
import { authenticateToken } from '../middleware/auth';
import { CancelDirectDebit,DirectDebitHistory, DirectDebitStatus, InitializeOneTime, InitializeReOccuring } from '../controllers/Collection/collection';


router.post('/initialize',authenticateToken, InitializeReOccuring)
router.post('/initialize-onetime',authenticateToken, InitializeOneTime)
router.get('/mandate-status',authenticateToken, DirectDebitStatus)
router.get('/listLinks',authenticateToken, DirectDebitHistory)
router.post('/Cancel',authenticateToken, CancelDirectDebit)








export default router;