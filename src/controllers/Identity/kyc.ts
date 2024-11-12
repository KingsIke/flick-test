import {Request,Response} from "express";
import axios from "axios";

import {CACBasicValidation, KycBvnValidation, KycNINValidation, KycPhoneNoValidation, options, TinKYBValidation } from "../../util/utils";
import { CACBasicKYB, KycBVN, KYCNIN, KYCPhoneNumber, TinKYB } from "../../dto/identity";


export const BVN = async (req: Request, res: Response) => {

try {

  const { type } = req.params; 
  const { IdNumber } = <KycBVN>req.body;

 
  const IndividualValidate = KycBvnValidation.validate(req.body, options);
  if (IndividualValidate.error) {
      return res.status(400).json(IndividualValidate.error.details[0].message);
  }


  const validTypes = ['basic', 'advance'];
  if (!validTypes.includes(type)) {
      return res.status(400).json({ error: 'Invalid type specified. Must be either "basic" or "advanced" '});
  }

 
  if (type === "basic") {
    return res.status(200).json({
              "status": 200,
              "message": "Customer identity fetched successfully",
              "data": {
                "identity": {
                  "data": {
                    "phone_1": "08012345678",
                    "image": "NA",
                    "middlename": "DOE",
                    "firstname": "JOHN",
                    "full_details": {
                      "last_name": "WILLIAMS",
                      "bvn": "22222222222",
                      "middle_name": "DOE",
                      "first_name": "JOHN",
                      "date_of_birth": "19-Jan-1900",
                      "phone_number1": "08012345678"
                    },
                    "lastname": "WILLIAMS"
                  }
                }
              }
            })
  } else if (type === "advance") {
    return res.status(200).json(
            {
              "status": 200,
              "message": "Customer identity fetched successfully",
              "data": {
                "identity": {
                  "data": {
                    "image": "http://google.com.",
                    "phone_1": "080224445552",
                    "middlename": "DOE",
                    "firstname": "JOHN",
                    "full_details": {
                      "gender":"male",
                      "last_name": "WILLIAMS",
                      "bvn": "22222222222",
                      "middle_name": "DOE",
                      "first_name": "JOHN",
                      "date_of_birth": "19-Jan-1900",
                      "customer":"wtwu3905jg",
                      "phone_number1": "07011113333"
                    },
                    "lastname": "WILLIAMS",
                    "address": "lekki,Nigeria",
                    "created_at": "2020-10-12T09:34:34",
                    "update_at": "2020-10-12T09:34:34",
                    "id": "or9rjndi34",
                    "customer_id": "2idrju5ef"
                   
                  }
                }
              }
            })
  }
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
export const PhoneNumber = async (req: Request, res: Response) => {

  try {
     
     


    const { type } = req.params; 

    const { phone_number  } = <KYCPhoneNumber>req.body;



    const IndividualValidate = KycPhoneNoValidation.validate(
        req.body,
        options
    );

    if (IndividualValidate.error) {
        return res
            .status(400)
            .json(IndividualValidate.error.details[0].message);
    }

  const validTypes = ['basic', 'advance'];
  if (!validTypes.includes(type)) {
      return res.status(400).json({ error: `Invalid type specified. Must be either ${"basic"} or ${"advanced"} `});
  }

 
  if (type === "basic") {
    return res.status(200).json({
     "status": 200,
     "message": "Customer identity fetched successfully",
     "data": {
       "status": 200,
       "message": "Customer identity fetched successfully",
       "data": {
         "identity": {
           "data": {
             "phone_1": "08012345678",
             "image": "NA",
             "middlename": "NA",
             "firstname": "JOHN",
             "full_details": {
               "gender": "Female",
               "date_of_birth": "1900-01-19",
               "last_name": "WILLIAMS",
               "msisdn": "08039665860",
               "middle_name": "NA",
               "first_name": "JOHN",
               "email": "NA",
               "phone_number1": "08012345678"
             },
             "lastname": "WILLIAMS"
           }
         }
       }
     }
     
   })
 } 
 else if (type === "advance") {
  return res.status(200).json(
    {
      "status": 200,
      "message": "Customer identity fetched successfully",
      "data": {
        "identity": {
          "data": {
            "phone_1": "070112211222",
            "image": "https://dv2.cloudfront.net",
            "firstname": "user FirstName",
            "full_details": {
              "email": "@gmail.com",
              "date_of_birth": "2023-1-31",
              "last_name": "Kingsley",
              "msisdn": "090111122",
              "middle_name": "Flick",
              "first_name": "Kings",
              "phone_number1": "08111222000",
              "gender": "male"
            },
            "middlename": "user middleName",
            "lastname": "user LastName"
          }
        }
      }
    })
    
  }
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
export const NIN = async (req: Request, res: Response) => {

  try {
     
     



    const { nin, dob  } = <KYCNIN>req.body;



    const IndividualValidate = KycNINValidation.validate(
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
    "message": "Customer identity fetched successfully",
    "data": {
      "data": {
        "phone_2": "NA",
        "phone_1": "080111122221",
        "image": "https://bucket.s3.us-east-2.amazonaws.com/uploads/sR2.jpg",
        "firstname": "Kingsley",
        "full_details": {
          "residential_address": "20 LAGOS STREET",
          "gender": "FEMALE",
          "state_of_origin": "Lagos",
          "date_of_birth": "19-12-1900",
          "lga_of_origin": "NA",
          "title": "NA",
          "lga_of_residence": "Lekki",
          "nin": "15494273684",
          "employmentstatus": "NA",
          "birthlga": "NA",
          "first_name": "JOHN",
          "email": "NA",
          "educationallevel": "NA",
          "profession": "NA",
          "image": "https://bucket.s3.us-east-2.amazonaws.com/uploads/sR2.jpg",
          "birthcountry": "nigeria",
          "nok_firstname": "NA",
          "nok_address1": "NA",
          "residencestatus": "NA",
          "last_name": "WILLIAMS",
          "vnin": "NA",
          "middle_name": "DOE",
          "residence_state": "Lagos",
          "religion": "NA",
          "nok_state": "NA",
          "nok_middlename": "NA",
          "marital_status": "NA",
          "nok_surname": "NA",
          "registration_date": "NA",
          "self_origin_place": "NA",
          "heigth": "NA",
          "birthstate": "NA",
          "nok_lga": "NA",
          "nok_town": "NA",
          "spoken_language": "NA",
          "phone_number1": "08012378",
          "residence_town": "NA"
        },
        "address": "20 LAGOS STREET",
        "middlename": "DOE",
        "lastname": "WILLIAMS"
      }
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
export const CACBasic = async (req: Request, res: Response) => {

  try {
     
     



    const { rcNumber } = <CACBasicKYB>req.body;



    const IndividualValidate = CACBasicValidation.validate(
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
    "active": true,
    "email": "null",
    "id": 3061051,
    "delistingStatus": "null",
    "natureOfBusinessName": "null",
    "classification": "BUSINESS NAME",
    "rcNumber": "236006",
    "registrationApproved": true,
    "approvedName": "PAY DAY SUPERMARKET",
    "city": "OWORONSHOKI",
    "lga": "null",
    "branchAddress": "",
    "registrationDate": "2015-09-01T16:28:55.017+00:00",
    "classificationId": 1,
    "headOfficeAddress": "null",
    "businessCommencementDate": "2015-08-30T23:00:00.000+00:00",
    "objectives": "",
    "companyTypeName": "BUSINESS_NAME_FIRM",
    "searchScore": 0.060792710632085,
    "address": "NO. 2, ADAMS STREET",
    "state": "LAGOS"
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
export const CACAdvance = async (req: Request, res: Response) => {

  try {
     
     



    const { rcNumber } = <CACBasicKYB>req.body;



    const IndividualValidate = CACBasicValidation.validate(
        req.body,
        options
    );

    if (IndividualValidate.error) {
        return res
            .status(400)
            .json(IndividualValidate.error.details[0].message);
    }

return res.status(200).json(
  {
    "status": "ACTIVE",
    "id": 5189730,
    "approvedName": "KIDDIEWINK LIMITED",
    "objectives": "null",
    "registrationApproved": true,
    "rcNumber": "1509595",
    "address": "37, Olowora Road",
    "branchAddress": "null",
    "registrationSubmitted": true,
    "businessCommencementDate": "null",
    "reservationSerialNo": "7795298215",
    "active": true,
    "registrationSerialNo": "null",
    "registrationApprovedByRg": "null",
    "trackingId": "4e3FAXmkqneV3bscniPf",
    "dateOfReservation": "2018-12-18T07:44:24.787+00:00",
    "needsProficiencyDocs": false,
    "availabilityCode": "06890724018",
    "nameAvailability": 4189656,
    "forwardedToAo": "null",
    "forwardedToRgs": true,
    "classificationFk": {
      "id": 2,
      "name": "COMPANY",
      "description": "Company"
    },
    "natureOfBusinessFk": {
      "id": 100238,
      "name": "General Merchandise",
      "description": "PRIVATE COMPANY LIMITED BY SHARES",
      "natureOfBusinessCategoryFk": "null",
      "isActive": "null",
      "un_isic": "null",
      "hidden": "null",
      "isic_group_fk": "null"
    },
    "companyTypeFk": {
      "id": 6883,
      "name": "PRIVATE_COMPANY_LIMITED_BY_SHARES",
      "description": "PRIVATE COMPANY LIMITED BY SHARES",
      "classification_fk": {
        "id": 0,
        "name": "null",
        "description": "null"
      }
    },
    "registrationDate": "2019-02-25T15:38:40.357+00:00",
    "review_status": "REVIEWED",
    "isOldRecord": false,
    "regPortalUserFk": {
      "id": 1887270,
      "surname": "Kingsley",
      "firstname": "flick",
      "otherName": "",
      "email": "emma@yahoo.com",
      "phoneNumber": "+234709736",
      "userId": "CF-909357",
      "approved": true,
      "portalUserTypeFk": {
        "id": 88,
        "name": "Portal User",
        "description": "Portal User"
      },
      "gender": "MALE",
      "dateOfBirth": "1987-04-15T23:00:00.000+00:00",
      "streetNumber": "16",
      "postcode": "100253"
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
export const TinVerification = async (req: Request, res: Response) => {

  try {
     
     



    const { tin } = <TinKYB>req.body;



    const IndividualValidate = TinKYBValidation.validate(
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
    "Name": "Kingsley Name",
    "TIN": "01239874561",
    "RC_BN": "RC111100",
    "Tax_Office": "MSTO VICTORIA ISLAND ",
    "Phone": "07011221122",
    "Email": "TinUser@gmail.com"
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


