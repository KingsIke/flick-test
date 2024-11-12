import { Request, Response, NextFunction } from "express";
import { CreateBeneficiaryInput, InitiatePayoutInput, NameEnquiryInput, PayBeneficiaryInput} from "../../dto/payout";
import { CreateBeneficiaryValidation, InitiatePayoutValidation, NameEquiryValidation, options, PayBeneficiaryValidation, VerifyPayoutValidation } from "../../util/utils";


export const Banks = async (req: Request, res: Response, next: NextFunction) => {



    try {


        return res.status(200).json({
            "status": 200,
            "message": "banks fetched successfully",
            "data": {
                "bankList": [
                    {
                        "bank_code": "flick20034",
                        "name": "GTBank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20035",
                        "name": "Access Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20036",
                        "name": "Kuda Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20037",
                        "name": "Standard Chartered",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20038",
                        "name": "Stanbic IBTC Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20039",
                        "name": "First Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20040",
                        "name": "FCMB",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20041",
                        "name": "Zenith Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20042",
                        "name": "Fidelity Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20043",
                        "name": "United Bank For Africa",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20044",
                        "name": "Wallets Africa",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20045",
                        "name": "Union Bank of Nigeria",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20046",
                        "name": "Sterling Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20047",
                        "name": "Sterling Bank",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20048",
                        "name": "ALAT by WEMA",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20049",
                        "name": "ALAT by WEMA",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20050",
                        "name": "Opay",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20051",
                        "name": "United Bank For Africa",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20052",
                        "name": "Zenith Bank",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20053",
                        "name": "Ecobank Nigeria",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20054",
                        "name": "Ecobank Nigeria",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20055",
                        "name": "Access Bank",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20056",
                        "name": "Fidelity Bank",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20057",
                        "name": "Flutterwave",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20058",
                        "name": "Paystack",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20059",
                        "name": "FCMB",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20060",
                        "name": "First Bank",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20061",
                        "name": "Jaiz Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20062",
                        "name": "Stanbic IBTC Bank",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20063",
                        "name": "Wallets Africa",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20064",
                        "name": "Unity Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20065",
                        "name": "Piggyvest",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20066",
                        "name": "Cowrywise",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20067",
                        "name": "VULTe Digital Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20068",
                        "name": "Heritage Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20069",
                        "name": "Keystone Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20070",
                        "name": "gomoney",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20071",
                        "name": "Providus Bank",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20072",
                        "name": "Providus Bank",
                        "type": "PERSONAL_BANKING"
                    },
                    {
                        "bank_code": "flick20073",
                        "name": "Brass",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20074",
                        "name": "Globus Bank",
                        "type": "BUSINESS_BANKING"
                    },
                    {
                        "bank_code": "flick20075",
                        "name": "Chaka",
                        "bankCode": null
                    },
                    {
                        "bank_code": "flick20076",
                        "name": "Risevest",
                        "bankCode": null
                    }
                ]
            }
        })
    }
    catch (error) {

    }








    

}
export const NameEnquiry = async (req: Request, res: Response, next: NextFunction) => {



    try {
        
         



        const { 
           account_number,
            bank_code
            } = <NameEnquiryInput>req.body;



        const directDebitValidate = NameEquiryValidation.validate(
            req.body,
            options
        );

        if (directDebitValidate.error) {
           
            return res
                .status(400)
                .json(directDebitValidate.error.details[0].message);
        }



        return res.status(200).json({
           "status": 200,
  "message": "Account resolved successfully",
  "data": {
    "account_number": "1010101020",
    "account_name": "Kingsley Flick"
  }
        })
    } catch (err:any) {
        console.log(err)
        return res.status(err?.response?.status || 500).json({
          status: err?.response?.status || 500,
          message:err.message,
          data:err?.response?.data
        })
        
    }

}
export const VerifyPayout= async (req: Request, res: Response, next: NextFunction) => {



    try {
  const { 
            id

            } = req.params;



        const directDebitValidate = VerifyPayoutValidation.validate(
            req.params,
            options
        );

        if (directDebitValidate.error) {
          
            return res
                .status(400)
                .json(directDebitValidate.error.details[0].message);
        }



        return res.status(200).json({
            "status": 200,
            "Id": "FlickLoeOLASDIz",
            "account_number": "0123456789",
            "account_name": "Kingsley Flick",
            "bank_name": "Guaranty Trust Bank",
            "amount": "5000",
            "currency": "NGN",
            "transaction_status": "success"
          })
    } catch (err:any) {
        console.log(err)
        return res.status(err?.response?.status || 500).json({
          status: err?.response?.status || 500,
          message:err.message,
          data:err?.response?.data
        })
        
    }

}

export const InitiatePayout = async (req: Request, res: Response, next: NextFunction) => {



    try {
        
         



        const {
        bank_name,
        bank_code,
        account_number,
        amount,
        narration,
        currency,
        beneficiary_name,
        reference,
        debit_currency,
        email,
        mobile_number
        }
             =<InitiatePayoutInput>req.body



        const directDebitValidate = InitiatePayoutValidation.validate(
            req.body,
            options
        );

        if (directDebitValidate.error) {
         
            return res
                .status(400)
                .json(directDebitValidate.error.details[0].message);
        }



        return res.status(200).json({
            "status": "200",
            "id": "RIOJ-REWYUB",
            "message": "Payout queued successfully"
           
        })
    } catch (err:any) {
        console.log(err)
        return res.status(err?.response?.status || 500).json({
          status: err?.response?.status || 500,
          message:err.message,
          data:err?.response?.data
        })
        
    }

}

export const GetBeneficiary = async (req: Request, res: Response, next: NextFunction) => {



    try {

        return res.status(200).json({
            "status": 200,
            "message": "Data retrieved successfully",
            "count": 1,
            "data":[
                {
                  "beneficiary_id": "ABC3z4WeMA",
                  "account_no": "01234567890",
                  "routing": "12345678",
                  "dated": "2024-07-01T11:35:31.392Z",
                  "beneficiary_name": "GTB",
                  "beneficiary_address_1": "Ajah, Lagos, Nigeria",
                  "beneficiary_address_2": "NA",
                  "beneficiary_city": "Ajah",
                  "beneficiary_state": "Lagos",
                  "beneficiary_country": "Nigeria",
                  "beneficiary_postal_code": "102266",
                  "bank_name": "GTB",
                  "bank_address_1": "Ajah, Lagos, Nigeria",
                  "bank_address_2": "ikeja",
                  "bank_city": "Ajah",
                  "bank_state": "Lagos",
                  "bank_country": "Nigeria",
                  "bank_postal_code": "102266",
                  "swift_code": "12345678",
                  "transfer_type": "Wire"
                },
                 ]
           
        })
    } catch (err:any) {
        console.log(err)
        return res.status(err?.response?.status || 500).json({
          status: err?.response?.status || 500,
          message:err.message,
          data:err?.response?.data
        })
        
    }

}
export const CreateBeneficiary = async (req: Request, res: Response, next: NextFunction) => {



    try {
        
         


        const { 
            is_domicilary,
            account_no,
            routing,
            beneficiary_name,
            beneficiary_address_1,
            beneficiary_city,
            beneficiary_state,
            beneficiary_country,
            beneficiary_postal_code,
            bank_name,
            bank_code,
            bank_address_1,
            bank_address_2,
            bank_city,
            bank_state,
            bank_country,
            phone_no,
            email,
            bank_postal_code,
            transfer_type

            } = <CreateBeneficiaryInput>req.body;



        const directDebitValidate = CreateBeneficiaryValidation.validate(
            req.body,
            options
        );

        if (directDebitValidate.error) {
         
            return res
                .status(400)
                .json(directDebitValidate.error.details[0].message);
        }


        return res.status(200).json({
            "status": 200,
            "message": "Beneficiary was saved successfully",
            "data":{
                "beneficiary":"fjsisp904mjf"
            }
           
        })
    } catch (err:any) {
        console.log(err)
        return res.status(err?.response?.status || 500).json({
          status: err?.response?.status || 500,
          message:err.message,
          data:err?.response?.data
        })
        
    }

}
export const PayoutBeneficiary = async (req: Request, res: Response, next: NextFunction) => {



    try {
        
         


        const { 
            amount,
            narration,
            currency,
            beneficiary_id,
            beneficiary_name,
            debit_currency,
            is_off_ramp
          

            } = <PayBeneficiaryInput>req.body;



        const directDebitValidate = PayBeneficiaryValidation.validate(
            req.body,
            options
        );

        if (directDebitValidate.error) {
        
            return res
                .status(400)
                .json(directDebitValidate.error.details[0].message);
        }


        return res.status(200).json({
            "status": 200,
            "message": "Currency is going to be processed",
            "data":{
                "rate":"1560.98",
                "request_id":"t65kjrjgud95e",
                "currencyFrom":"NGN",
                "currencyTo":"NGN",
                "beneficiary_id":"Kingsley",
                "customerCode":"etoiue8t0e",
                "amount_collected":"122050",
                "amount_recieved":"19050",
                "amount_recievedKobo":"122050",
                "amount_collectedKobo":"122050",
                "payin_waller_address":"0X00000",
                "payout_waller_network":"Matric/Polygon",

            }
           
        })
    } catch (err:any) {
        console.log(err)
        return res.status(err?.response?.status || 500).json({
          status: err?.response?.status || 500,
          message:err.message,
          data:err?.response?.data
        })
        
    }

}


