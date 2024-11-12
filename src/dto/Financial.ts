import exp from "constants"

export interface ConnectInput{
    purpose: string,
    name: string,
    email:string
    phoneNumber:string
    selectedPeriod:number
}
export interface BalanceInput{
    accountNumber: string,

}
export interface SatementInput{
  monthRange: string,
  accountNumber:string

}
export interface TransactionInput{
  dayRange: string,
  accountNumber:string

}
export interface IndividualCreditReport{
  reportType: string,
   creditBureau: string,
   bvn: string

}
export interface BusinessCreditReport{
  reportType: string,
   creditBureau: string,
   business_number: string

}