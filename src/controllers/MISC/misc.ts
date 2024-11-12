import express, {Request,Response} from "express";
import axios from "axios";
import { BalanceMisc, TransmitKYBInput, webhookUrlMisc } from "../../dto/misc";
import { BalanceMiscValidation, options, TransmitKYBValidation, WebhookMiscValidation } from "../../util/utils";




export const TransmitKYB = async (req: Request, res: Response) => {

  try {
      
     



    const {
 
        companyName,
        firstName,
        lastName,
        incNumber,
        business_email,
        dated,
        business_address,
        country,
        website,
        IncCertificate,
        IncMemart,
        proofOfBizAddress: {
          doc,
          type,
        },
        directors: [
          {
            fullName:directorFullName,
            position,
            bvn,
            idNumber,
            idType,
            idCard
          }
        ],
        shareholders: [
          {
            percOfShare,
            fullName:shareholdersFullName
          }
        ]
      } = <TransmitKYBInput>req.body;



    const IndividualValidate = TransmitKYBValidation.validate(
        req.body,
        options
    );

    if (IndividualValidate.error) {
        // console.log(validateVendorCreate.error)
        return res
            .status(400)
            .json(IndividualValidate.error.details[0].message);
    }


      return res.status(200).json(
        {
            "msg": "User created successfully, welcome User",
            "user": {
              "email": "innovex@app.com",
              "firstName": "userFirstName",
              "lastName": "userLasttName",
              "merchantCode": "USER_4jHUkIWaY_Y7nJJe4",
              "business_name": "Innovex",
              "incNumber": "KL1370227",
              "dated": "2023-10-20T12:09:13.166Z",
              "business_email": "innovex@app.com",
              "bizAddress": "lekki lagos",
              "country": "Nigeria",
              "website": "https://newbank.com",
              "isVulaUser": "true",
              "IncCertificate": "url",
              "IncMemart": "url",
              "directors": [
                {
                  "fullName": "userFullName",
                  "position": "HOE",
                  "bvn": "1122334400",
                  "idNumber": "001122334",
                  "idType": "int’l passport/driver’s license",
                  "idCard": "url "
                }
              ],
              "shareholders": [
                {
                  "fullName": "userFullName",
                  "percOfShare": "100"
                }
              ],
              "proofOfBizAddress": {
                "type": "Bank Statement",
                "doc": "url"
              },
              "avatar": "",
              "isVerified": "false",
              "isEmailVerified": "false",
              "isLive": "false",
              "userName": "userLasttName",
              "password": ""
            }
          }
    )
    
}


catch (err:any) {
  console.log(err)
  return res.status(err?.response?.status || 500).json({
    status: err?.response?.status || 500,
    message:err.message,
    data:err?.response?.data
    })
  
}
}
export const Balance = async (req: Request, res: Response) => {

  try {
      
     


    const { category, currency } = req.query;
    const IndividualValidate = BalanceMiscValidation.validate(
        req.query,
        options
    );


    if (IndividualValidate.error) {
        // console.log(validateVendorCreate.error)
        return res
            .status(400)
            .json(IndividualValidate.error.details[0].message);
    }






      return res.status(200).json(
        {
            "status": 200,
            "message": "balance retrieved successfully",
            "data": [
              {
                "currency": "NGN",
                "collection_balance": 18405,
                "payout_balance": 4405,
                "api_balance": 0
              },
              {
                "currency": "USD",
                "collection_balance": 0,
                "payout_balance": 0
              }
            ]
          }
    )
    
}


catch (err:any) {
  console.log(err)
  return res.status(err?.response?.status || 500).json({
    status: err?.response?.status || 500,
    message:err.message,
    data:err?.response?.data
    })
  
}
}
export const ExchangeRate = async (req: Request, res: Response) => {

  try {
      
     


    const { from_currency, to_currency, amount } = req.query;
    const IndividualValidate = BalanceMiscValidation.validate(
        req.query,
        options
    );


    if (IndividualValidate.error) {
        // console.log(validateVendorCreate.error)
        return res
            .status(400)
            .json(IndividualValidate.error.details[0].message);
    }






      return res.status(200).json(
       
{
    
      "data": "1 USD = 1076 NGN"
    
    }
    )
    
}


catch (err:any) {
  console.log(err)
  return res.status(err?.response?.status || 500).json({
    status: err?.response?.status || 500,
    message:err.message,
    data:err?.response?.data
    })
  
}
}
export const WebhookResend = async (req: Request, res: Response) => {

    try {
        
        
  
  
  
      const {
   
        transactionId
        } = <webhookUrlMisc>req.body;
  
  
  
      const IndividualValidate = WebhookMiscValidation.validate(
          req.body,
          options
      );
  
      if (IndividualValidate.error) {
          // console.log(validateVendorCreate.error)
          return res
              .status(400)
              .json(IndividualValidate.error.details[0].message);
      }
  
  
        return res.status(200).json(
            {
                "status": "200",
                "message": "webhook resend successful"
              }
      )
      
  }
  
  
  catch (err:any) {
    console.log(err)
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message:err.message,
      data:err?.response?.data
      })
    
  }
  }
export const TransationStatus = async (req: Request, res: Response) => {

    try {
        
        
  
  
  
      const {
   
        transactionId
        } = <webhookUrlMisc>req.body;
  
  
  
      const IndividualValidate = WebhookMiscValidation.validate(
          req.body,
          options
      );
  
      if (IndividualValidate.error) {
          // console.log(validateVendorCreate.error)
          return res
              .status(400)
              .json(IndividualValidate.error.details[0].message);
      }
  
  
        return res.status(200).json(
            {
                "status": 200,
                "message": "success",
                "success": "true",
                "data": {
                  "transaction_status": "success",
                  "fee": 73,
                  "transaction_amount": 10100,
                  "channel": "transfer",
                  "balBefore": 798761,
                  "created_at": "2024-01-16T20:42:15.439Z",
                  "merchant_name": "Merchant Name.Limited",
                  "settled_amount": 14427,
                  "balAfter": 20000,
                  "currency": "NGN",
                  "email": "payments@getflick.co",
                  "status": "00",
                  "transaction_ref": "bcdc-7770c71f7ae7"
                }
              }
      )
      
  }
  
  
  catch (err:any) {
    console.log(err)
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message:err.message,
      data:err?.response?.data
      })
    
  }
  }