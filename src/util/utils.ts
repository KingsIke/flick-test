import Joi from "joi";


const strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const stringPassswordError ="Password must have atleast one upper case alphabet, one lower case alphabet, one digit with one special character. Minimum eight in length"



export  const bvnSchema = Joi.string().pattern(/^\d{11}$/).required();
export const sessionCodeSchema = Joi.string().required()


export const IndividualReport = Joi.object().keys({
  reportType:Joi.string().valid("basic", "advance").required(),
  creditBureau:Joi.string().valid("Credit_Registry", "CRC","First_Central").required(),
   
})


export const bvnId = Joi.object().keys({
  IdNumber:Joi.string().length(11).valid("22221111333").required()
})



export const ConnectValidation = Joi.object().keys({
purpose: Joi.string().valid("statement","transaction", "balance","identity").required().messages({
 
  'any.required': 'Must be for statement, transaction, balance, identity' 
}),
name: Joi.string().required(),
email: Joi.string().email().required(),
phoneNumber: Joi.string().valid("07011112222").required().messages({
  'any.only': 'Must be exactly Phone number given', 
}),
selectedPeriod: Joi.number(),
})
export const accountNumberValidation = Joi.object().keys({
  accountNumber: Joi.string()
  .length(10)
  .valid("1010101020")  
  .required()
  .messages({
    'string.pattern.name': 'must be a numeric number', 
    'string.length': 'must be exactly 10 digits', 
    'any.only': 'Must be exactly Account number given', 
    'any.required': 'accountNumber is required' 
  }),

})
export const statementValidation = Joi.object().keys({
  accountNumber: Joi.string()
  .length(10)
  .valid("1010101020")
  .required()
  .messages({
    'string.length': 'must be exactly 10 digits', 
    'any.only': 'Must be exactly Account number given', 
    'any.required': 'accountNumber is required' 
  }),
  monthRange:Joi.string().valid("1", "3", "6", "9", "12").required().messages({
    'string.pattern.name': 'must be 1, 3, 6, 9 or 12 months',
    'any.only': 'Must be either 1, 3, 6, 9, 12 month', 
  })

})
export const transactionValidation = Joi.object().keys({
  accountNumber: Joi.string()
  .length(10)
  .valid("1010101020") 
  .required()
  .messages({
    'string.length': 'must be exactly 10 digits',
    'any.only': 'Must be exactly Account number given', 
    'any.required': 'accountNumber is required' 
  }),
  dayRange:Joi.string().valid("1", "3", "7", "14", "30").required().messages({
    'string.pattern.name': 'must be a  1, 3, 7, 14, & 30 days',
    'any.only': 'Must be either 1, 3, 7, 14, & 30 days', 

  })

})
    
export const LoginUserValidate = Joi.object().keys({
  
  email: Joi.string().email().required(),
  password: Joi.string().regex(strongPasswordRegex).message(stringPassswordError).required(),
 
})
export const IndividualReportValidation = Joi.object().keys({
  reportType: Joi.string().valid("basic","advance").required(),
  creditBureau: Joi.string().valid("Credit_Registry","CRC", "First_Central").required(),
  bvn:Joi.string().length(11).valid("22221111333").required().messages({

    'any.only': 'Must be bvn given', 

  })

  })
export const BusinessReportValidation = Joi.object().keys({
  reportType: Joi.string().valid("basic","advance").required(),
  creditBureau: Joi.string().valid("Credit_Registry","CRC", "First_Central").required(),
  business_number:Joi.string().valid("RC1000110").required().messages({

    'any.only': 'Must be business number given', 

  })

  })

export const CheckoutValidation = Joi.object().keys({
  amount: Joi.number()
    .greater(9999)
    .required()
    .messages({
      'number.greater': 'Amount must be 10000 or greater than' 
    }),
 Phoneno:Joi.string().valid("07011112222").required().messages({

  'any.only': 'Must be Phone number given', 

}), 
 currency_collected:Joi.string().valid("NGN","USD", "CAD","EUR","GBP", "KES", "GHS").required(), 
 currency_settled:Joi.string().valid("NGN","USD", "CAD","GBP","KES", "EUR", "GHS").required(),  
 email:Joi.string().email().required(),
 redirectUrl:Joi.string().allow('').optional(),
 webhookUrl :Joi.string().allow('').optional(),
 transationId:Joi.string().allow('').optional(),

  })

 export const DirectDebitValidation = Joi.object().keys({
  transationId:Joi.string().min(8).required(),
  bvn:Joi.string().length(11).valid("22221111333").required().messages({
    "any.only":
      "Use the valid bvn given",
  }),
  phone_no:Joi.string().valid("07011112222").required().messages({
    "any.only":
      "Use the valid phone number given",
  }),
  email:Joi.string().email().required(),
  address:Joi.string().required(),
  amount: Joi.number()
  .greater(9999)
  .required()
  .messages({
    'number.greater': 'Amount must be 10000 or greater than' 
  }),
  start_date:Joi.string()
  .pattern(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)
  .required()
  .messages({
    "string.pattern.base": "startDate must be in the format YYYY-MM-DD",
  }),
  end_date:Joi.string()
  .pattern(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)
  .required()
  .messages({
    "string.pattern.base": "endDate must be in the format YYYY-MM-DD",
  }),
  frequency:Joi.string().valid("daily", "weekly", "monthly").required(),
  currency_collected:Joi.string()
  .pattern(/^[A-Z]{3}$/)
  .required()
  .messages({
    "string.pattern.base":
      "currency_collected must be in this format  (e.g., 'USD')",
  }),
  redirectUrl:Joi.string().allow("").optional(),
  webhookUrl :Joi.string().allow("").optional(),
  })

  export const DirectDebitOneTimeValidation = Joi.object().keys({
    transationId:Joi.string().min(8).required(),
    bvn:Joi.string().length(11).valid("22221111333").required().messages({
      "any.only":
        "Use the valid bvn given",
    }),
    phone_no:Joi.string().valid("07011112222").required().messages({
      "any.only":
        "Use the valid phone number given",
    }),
    email:Joi.string().email().required(),
    address:Joi.string().required(),
    amount: Joi.number()
    .greater(9999)
    .required()
    .messages({
      'number.greater': 'Amount must be 10000 or greater than' 
    }),
    charge_date:Joi.string()
    .pattern(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)
    .required()
    .messages({
      "string.pattern.base": "chargeDate must be in the format YYYY-MM-DD",
    }),
    currency:Joi.string()
    .pattern(/^[A-Z]{3}$/)
    .required()
    .messages({
      "string.pattern.base":
        "currency must be in this format (e.g., 'NGN')",
    }),
    redirectUrl:Joi.string().allow("").optional(),
    webhookUrl :Joi.string().allow("").optional(),
    })
  export const DirectDebitStatusValidation = Joi.object().keys({
    transationId:Joi.string().min(8).required()
    })
  export const TransationHistoryValidation = Joi.object().keys({
    category:Joi.string().valid("collection", "payout", "settlement").required(), 
    currency:Joi.string().valid("NGN","USD", "CAD","GBP","EUR", "KES", "GHS").required(), 
    limit:Joi.string().required(),
    data_begin:Joi.string()
    .pattern(new RegExp(/^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/))
    .messages({
      'string.pattern.base': 'dataBegin must be in the format YYYY-MM-DD HH:mm:ss'}), 
 date_end:Joi.string()
 .pattern(new RegExp(/^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/))
 .messages({
'string.pattern.base': 'dataEnd must be in the format YYYY-MM-DD HH:mm:ss'}),
    })
  export const NameEquiryValidation = Joi.object().keys({
    account_number:Joi.string().valid("1010101020").required().messages({
      'any.only': 'Used the provided account number'}),
            bank_code:Joi.string().min(3).required()
  
    })
  export const VerifyPayoutValidation = Joi.object().keys({
    id:Joi.string().required(),
           
  
    })
  export const InitiatePayoutValidation = Joi.object().keys({
    bank_name:Joi.string().required(),
        bank_code:Joi.string().required(),
        account_number:Joi.string().valid("1010101020").required().messages({
          'any.only': 'Used the provided account number'}),
        amount: Joi.number()
        .greater(9999)
        .required()
        .messages({
          'number.greater': 'Amount must be 10000 or greater than' 
        }),
        narration:Joi.string().required(),
        currency:Joi.string()
        .pattern(/^[A-Z]{3}$/)
        .required()
        .messages({
          "string.pattern.base":
            "currency must be in this format (e.g., 'NGN')",
        }),
        beneficiary_name:Joi.string().required(),
        reference:Joi.string().length(8).required(),
        debit_currency:Joi.string()
        .pattern(/^[A-Z]{3}$/)
        .required()
        .messages({
          "string.pattern.base":
            "currency must be in this format (e.g., 'NGN')",
        }),
        email:Joi.string().email().allow("").optional(),
        mobile_number:Joi.string().allow("").optional()
           
  
    })
  export const CreateBeneficiaryValidation = Joi.object().keys({
    is_domicilary:Joi.boolean().required().messages({
      'boolean.base': 'is_domicilary must be a true or false',
      'any.required': 'is_domicilary is required'
  }),
    account_no:Joi.string().valid("1010101020").required().messages({
      'any.only': 'Used the provided account number'}),
    routing:Joi.string().required(),
    beneficiary_name:Joi.string().required(),
    beneficiary_address_1:Joi.string().required(),
    beneficiary_city:Joi.string().required(),
    beneficiary_state:Joi.string().required(),
    beneficiary_country:Joi.string().required(),
    beneficiary_postal_code:Joi.string().required(),
    bank_name:Joi.string().required(),
        bank_code:Joi.string().required(),
        bank_address_1:Joi.string().required(),
        bank_address_2:Joi.string().required(),
        bank_city:Joi.string().required(),
        bank_state:Joi.string().required(),
        bank_country:Joi.string().required(),
        phone_no:Joi.string().valid("07011112222").required().messages({
          "any.only":
            "Use the valid phone number given",
        }),
        email:Joi.string().email().required(),
        bank_postal_code:Joi.string().required(),
        transfer_type:Joi.string().required()
       
     
  
    })
  export const PayBeneficiaryValidation = Joi.object().keys({
    amount:Joi.number()
    .greater(9999)
    .required()
    .messages({
      'number.greater': 'Amount must be 10000 or greater than' 
    }),
    narration:Joi.string().required(),
    currency:Joi.string()
        .pattern(/^[A-Z]{3}$/)
        .required()
        .messages({
          "string.pattern.base":
            "currency must be in this format (e.g., 'NGN')",
        }),
    beneficiary_id: Joi.string().required(),
    beneficiary_name: Joi.string().required(),
    debit_currency:Joi.string()
        .pattern(/^[A-Z]{3}$/)
        .required()
        .messages({
          "string.pattern.base":
            "currency must be in this format (e.g., 'NGN')",
        }),
        is_off_ramp:Joi.string().required()
       
     
  
    })
    export const KycBvnValidation = Joi.object().keys({
    
      IdNumber:Joi.string().length(11).valid("22221111333").required().messages({
        "any.only":
          "Use the valid bvn given",
      })
    
      })
    export const KycPhoneNoValidation = Joi.object().keys({
      phone_number:Joi.string().valid("07011112222").required().messages({
        "any.only":
          "Use the valid phone number given",
      })
    
      })
    export const KycNINValidation = Joi.object().keys({

      dob: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required().label('Date').messages({
        "string.pattern.base":`DOB must be in the format YYYY-MM-DD`
      }),
      nin:Joi.string().valid("11002211330").required().messages({
        "any.only":
          "Use the valid nin number given",
      })
    
      })
    export const CACBasicValidation = Joi.object().keys({

      rcNumber:Joi.string().valid("RC1783159").required().messages({
        "any.only":
          "Use the valid rc Number  given",
      })
    
      })
    export const  TinKYBValidation = Joi.object().keys({

      tin:Joi.string().valid("01239874561").required().messages({
        "any.only":
          "Use the valid tin number given",
      })
    
    
      })
      export const TransmitKYBValidation = Joi.object().keys({
        companyName: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  incNumber: Joi.string().required(),
  business_email: Joi.string().email().required(),
  dated: Joi.string().required(),
  business_address: Joi.string().required(),
  country: Joi.string().required(),
  website: Joi.string().uri().required(),
  IncCertificate: Joi.string().required(),
  IncMemart: Joi.string().required(),
  proofOfBizAddress: Joi.object({
  doc: Joi.string().required(),
  type: Joi.string().required()
}).required(),
  directors: Joi.array().items(Joi.object({
    fullName: Joi.string().required(),
    position: Joi.string().required(),
    bvn: Joi.string().valid("22221111333").required().messages({
      "any.only":
        "Use the valid bvn number given",
    }),
    idNumber: Joi.string().required(),
    idType: Joi.string().required(),
    idCard: Joi.string().required()
  })).required(),
  shareholders: Joi.array().items(Joi.object({
    percOfShare: Joi.number().required(),
    fullName: Joi.string().required()
  })).required()
        })
        export const BalanceMiscValidation = Joi.object().keys({
          category: Joi.string().valid("payout","walletapi","collections").required(),
          currency: Joi.string().length(3).uppercase().optional(),
        
          })
        export const ExchangeRateMiscValidation = Joi.object().keys({
          from_currency: Joi.string().length(3).uppercase().required(),
          to_currency: Joi.string().length(3).uppercase().required(),
          amount: Joi.string().optional()
        
          })
        export const WebhookMiscValidation = Joi.object().keys({
          transactionId: Joi.string().required(),
         
        
          })
        export const CardDetailsValidation = Joi.object().keys({
         
          cardNumber: Joi.string().length(16).required(), 
          cvv: Joi.string().length(3).required(), 
          cardDate: Joi.string().pattern(/^(0[1-9]|1[0-2])\/\d{2}$/, 'MM/YY').required(), 
          cardName: Joi.string().valid("Kingsley Flick").required().messages({

            'any.only': ' Card Name must be either the given Name', 
        
          }),
          amount: Joi.string().required() 
        
          })
        export const CardOTPValidation = Joi.object().keys({
         
          transactionNumber: Joi.string().pattern(/Flick/, { name: 'Flick' }).required().messages({
            'string.pattern.name': 'transactionNumber is incorrect',
          }),  
          encryptedCardDetails: Joi.string().required(), 
          otp: Joi.string().length(6).valid("411421").required().messages({

            'any.only': ' OTP must be either the given otp',
            'string.length': 'must be exactly 6 digits',  
        
          }), 
        
          })
        export const PinValidation = Joi.object().keys({
         
          transactionNumber: Joi.string().required(),  
          encryptedCardDetails: Joi.string().required(), 
          pin: Joi.string().length(6).valid("421512").required().messages({

            'any.only': ' Pin must be either the given Pin',
            'string.length': 'must be exactly 6 digits',  
        
          }),
        })


export const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};
