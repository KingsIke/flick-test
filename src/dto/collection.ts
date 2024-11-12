export interface CheckoutInput{
    amount:number,
     Phoneno:"string",
     currency_collected:"string",
     currency_settled:"string",
     email:"string",
     redirectUrl?:"string",
     webhookUrl?:"string"
    transationId?:"string"
}
export interface DirectDebitInitialInput{
    transationId:"string",
     bvn:"string",
     phone_no:"string",
     email:"string",
     address:"string",
     amount:"string",
     start_date:"string",
     end_date:"string",
     frequency:"string",
     currency_collected:"string",
     redirectUrl?:"string",
     webhookUrl?:"string"
}

export interface DirectDebitOneInput{
    transationId:"string",
     bvn:"string",
     phone_no:"string",
     email:"string",
     address:"string",
     amount:"string",
     charge_date:"string",  
    currency:"string", 
     frequency:"string",
     currency_collected:"string",
     redirectUrl:"string",
     webhookUrl :"string"
}
export interface DirectDebitStatusInput{
    transationId:"string"
}
export interface TransationHistoryInput{
    category: string, 
            currency: string, 
            limit: string, 
            data_begin: string, 
             date_end: string
}

export interface CardPaymentInput{
    cardNumber:"string", 
    cvv:"string", 
    cardDate:"string", 
    cardName:"string", 
    amount:"string" 
}
export interface OTPPaymentInput{
    transactionNumber:"string", 
    otp:"string", 
    encryptedCardDetails:"string", 
  
}
export interface PinPaymentInput{
    transactionNumber:"string", 
    pin:"string", 
    encryptedCardDetails:"string", 
  
}