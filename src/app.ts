import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import connectRoute from './routes/connect'
import bureauRoute from './routes/bureau'
import collectionRoute from './routes/collection'
import directDebitRoute from './routes/directDebit'
import merchantRoute from './routes/merchant'
import transferRoute from './routes/transfer'
import kycRoute from './routes/kyc'
import kybRoute from './routes/kyb'
import transactionRoute from './routes/transaction'

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/accounts',  connectRoute);
app.use('/bureau',  bureauRoute);
app.use('/collection',  collectionRoute);
app.use('/direct-debit',  directDebitRoute);
app.use('/merchant',  merchantRoute);
app.use('/transfer',  transferRoute);
app.use('/kyc',  kycRoute);
app.use('/kyb',  kybRoute);
app.use('/transaction',  transactionRoute);



app.use(function (req: Request, res: Response, next: NextFunction) {
	next(createError(404));
});

export default app;
