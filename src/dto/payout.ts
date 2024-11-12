
export interface NameEnquiryInput{
  account_number:string,
  bank_code:string
}


export interface InitiatePayoutInput{
  
  bank_name: string,
  bank_code: string,
  account_number: string,
  amount: string,
  narration: string,
  currency: string,
  beneficiary_name: string,
  reference: string,
  debit_currency: string,
  email: string,
  mobile_number: string


}

export interface CreateBeneficiaryInput{
  is_domicilary:boolean,
            account_no:string,
            routing:string,
            beneficiary_name:string,
            beneficiary_address_1:string,
            beneficiary_city:string,
            beneficiary_state:string,
            beneficiary_country:string,
            beneficiary_postal_code:string,
            bank_name:string,
            bank_code:string,
            bank_address_1:string,
            bank_address_2:string,
            bank_city:string,
            bank_state:string,
            bank_country:string,
            phone_no:string,
            email:string,
            bank_postal_code:string,
            transfer_type:string
}
export interface PayBeneficiaryInput{
  amount:string,
  narration:string,
  currency:string,
  beneficiary_id:string,
  debit_currency:string,
  beneficiary_name:string,
  is_off_ramp:boolean
}