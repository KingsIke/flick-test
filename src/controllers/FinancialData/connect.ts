import { Request, Response, NextFunction } from "express";
import { BalanceInput, BusinessCreditReport, ConnectInput, IndividualCreditReport, SatementInput, TransactionInput } from "../../dto";
import { accountNumberValidation, BusinessReportValidation, ConnectValidation, IndividualReportValidation, options, statementValidation, transactionValidation } from "../../util/utils";


export const Connect = async (req: Request, res: Response, next: NextFunction) => {



try {

const { purpose, name, email, phoneNumber, selectedPeriod } = <ConnectInput>req.body;



  const ConnectValidate = ConnectValidation.validate(
  req.body,
  options
  );

  if (ConnectValidate.error) {

  return res
  .status(400)
  .json(ConnectValidate.error.details[0].message);
  }


  if (purpose === "statement") {
  if (![1, 3, 6, 9, 12].includes(selectedPeriod)) {
  return res.status(400).json({ message: 'Invalid selectedPeriod for statement. Must be 1, 3, 6, 9, or 12 months.' });
  }
  } else if (purpose === "transaction") {
  if (![1, 3, 7, 14, 30].includes(selectedPeriod)) {
  return res.status(400).json({ message: 'Invalid selectedPeriod for transaction. Must be 1, 3, 7, 14, or 30 days.' });
  }
  } else if (purpose === "balance" || purpose === "identity") {
  if (selectedPeriod !== undefined && selectedPeriod !== null) {
  return res.status(400).json({ message: 'No selectedPeriod should be provided for balance.' });
  }
  } else {
  return res.status(400).json({ message: 'Invalid purpose. Must be statement, transaction, or balance.' });
  }





  return res.status(200).json({
  "status": 200,
  "message": "successful",
  "id": "7add-4070-b01e-323f9cb763d7",
  "url": "https://link.paywithflick.co/pages/wwwwwiiii"
  })
  }
  catch (err:any) {
    console.log(err);
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message: err.message,
      data: err?.response?.data,
    });
  }

  }
  export const Balance = async (req: Request, res: Response, next: NextFunction) => {



  try {


  const { accountNumber
  } = <BalanceInput>req.body;



    const balanceValidate = accountNumberValidation.validate(
    req.body,
    options
    );

    if (balanceValidate.error) {

    return res
    .status(400)
    .json(balanceValidate.error.details[0].message);
    }





    return res.status(200).json({
    "status": 200,
    "bank": "Access Bank",
    "accountNumber": "1234567890",
    "accountType": "Premier Savings ",
    "bankingType": "PERSONAL_BANKING",
    "currency": "NGN",
    "balance": 211587
    })
    }
    catch (err:any) {
        console.log(err);
        return res.status(err?.response?.status || 500).json({
          status: err?.response?.status || 500,
          message: err.message,
          data: err?.response?.data,
        });
    }

    }
    export const Statement = async (req: Request, res: Response, next: NextFunction) => {



    try {





    const { monthRange, accountNumber } = <SatementInput>req.body;



      const StatementValidate = statementValidation.validate(
      req.body,
      options
      );

      if (StatementValidate.error) {

      return res
      .status(400)
      .json(StatementValidate.error.details[0].message);
      }



      const validMonthRanges = ["1", "3", "6", "9", "12"];

      // Check if the monthRange is in the validMonthRanges array
      if (!validMonthRanges.includes(monthRange)) {
      return res.status(400).json({ message: 'Invalid monthRange for statement. Must be 1, 3, 6, 9, or 12 months.' });

      }



      return res.status(200).json({
      "status": 200,
      "data": [
      {
      "Nuban": "1234567890",
      "datedStamp": "2024-08-19T14:10:31.837Z",
      "bankName": "Access Bank",
      "currency": "NGN",
      "bvn": "22222222222",
      "Amount": "100000",
      "dated": "2024-08-19T00:00:00.000Z",
      "TransactionType": "debit",
      "Narration": "repayment no 2",
      "TransType": "debit",
      "Balance": "null",
      "BeneficiaryName": "null"
      },
      {
      "Nuban": "1234567890",
      "datedStamp": "2025-08-19T14:10:31.837Z",
      "bankName": "GTB Bank",
      "currency": "NGN",
      "bvn": "22222222222",
      "Amount": "100000",
      "dated": "2024-08-19T00:00:00.000Z",
      "TransactionType": "debit",
      "Narration": "repayment no 2",
      "TransType": "debit",
      "Balance": "null",
      "BeneficiaryName": "null"
      },

      ]
      })
      }
      catch (err:any) {
        console.log(err);
        return res.status(err?.response?.status || 500).json({
          status: err?.response?.status || 500,
          message: err.message,
          data: err?.response?.data,
        });
      }

      }
      export const Identity = async (req: Request, res: Response, next: NextFunction) => {



      try {





      const { accountNumber } = <BalanceInput>req.body;



        const IdentityValidate = accountNumberValidation.validate(
        req.body,
        options
        );

        if (IdentityValidate.error) {

        return res
        .status(400)
        .json(IdentityValidate.error.details[0].message);
        }





        return res.status(200).json({
        "status": 200,
        "message": "success",
        "data": {
        "email": "N/A",
        "bvn": "22222222222",
        "address": "20 Ikoyi street Lagos",
        "phone": "07000319811",
        "dob": "01-10-2023",
        "gender": "male",
        "maritalStatus": "married",
        }
        })
        }
        catch (err:any) {
            console.log(err);
            return res.status(err?.response?.status || 500).json({
              status: err?.response?.status || 500,
              message: err.message,
              data: err?.response?.data,
            });
        }

        }

        export const Transaction = async (req: Request, res: Response, next: NextFunction) => {



        try {





        const { dayRange, accountNumber } = <TransactionInput>req.body;



          const transactionValidate = transactionValidation.validate(
          req.body,
          options
          );

          if (transactionValidate.error) {

          return res
          .status(400)
          .json(transactionValidate.error.details[0].message);
          }



          const validDayRanges = ["1", "3", "7", "14", "30"];

          // Check if the monthRange is in the validMonthRanges array
          if (!validDayRanges.includes(dayRange)) {
          return res.status(400).json({ message: 'Invalid dayRange for statement. Must be 1, 3, 7, 14, or 30 days.' });

          }



          return res.status(200).json({
          "status": 200,
          "data": [
          {
          "Nuban": "1234567890",
          "datedStamp": "2024-08-19T14:20:57.270Z",
          "bankName": "Access Bank",
          "currency": "NGN",
          "bvn": "22222222222",
          "Amount": "100000",
          "dated": "2024-08-19T00:00:00.000Z",
          "TransactionType": "debit",
          "Narration": "repayment no 2",
          "TransType": "debit",
          "Balance": "null",
          "BeneficiaryName": "null"
          },
          {
          "Nuban": "1234567890",
          "datedStamp": "2024-08-19T14:20:57.270Z",
          "bankName": "GTB Bank",
          "currency": "NGN",
          "bvn": "22222222222",
          "Amount": "100000",
          "dated": "2024-08-19T00:00:00.000Z",
          "TransactionType": "debit",
          "Narration": "repayment no 2",
          "TransType": "debit",
          "Balance": "null",
          "BeneficiaryName": "null"
          }
          ]
          })
          }
          catch (err:any) {
            console.log(err);
            return res.status(err?.response?.status || 500).json({
              status: err?.response?.status || 500,
              message: err.message,
              data: err?.response?.data,
            });
          }

          }

          export const IndividualReport = async (req: Request, res: Response, next: NextFunction) => {



          try {





          const { reportType, creditBureau, bvn } = <IndividualCreditReport>req.body;



            const IndividualValidate = IndividualReportValidation.validate(
            req.body,
            options
            );

            if (IndividualValidate.error) {

            return res
            .status(400)
            .json(IndividualValidate.error.details[0].message);
            }




            return res.status(200).json({

            "status": 200,
            "data": {
            "AccountData": {
            "PerformingAccounts": [
            {
            "Creditor_Registry_ID": "737566733492974312",
            "Account_No": "2211112211",
            "Abbreviated_Account_No": "2211112211",
            "Account_Owners": "John Doe",
            "Guarantors": "",
            "Date_Opened": "2021-11-12T00:00:00",
            "Account_Status_ID": 0,
            "Date_First_Reported": "2023-11-05T09:00:50.277",
            "Credit_Limit": 6000,
            "Balance": 0,
            "Minimum_Installment": 0,
            "Account_Type": "",
            "Term": "29",
            "Purpose": "NA",
            "Account_Owner_Notes": "",
            "Creditor_Notes": "",
            "Collateral": "",
            "Collateral_Value": 0,
            "Legal_Status_ID": 0,
            "Legal_Status_Date": null,
            "LastUpdatedBy": "737566733492974313",
            "LastUpdated": "2024-04-13T21:31:50.9",
            "Unique_ID": "333990757",
            "Account_Status_Date": "2024-03-31T00:00:00",
            "Payment": 0,
            "Payment_Date": "2024-03-31T00:00:00",
            "Balance_Date": "2024-03-31T00:00:00",
            "Term_Frequency": "monthly",
            "State_Change_Date": "2023-11-05T09:00:50.277",
            "Account_Type_Description": "",
            "Currency": "NGN",
            "Collateral_Currency": "NGN",
            "CreditorName": "Blue Ridge Microfinance Bank Limited",
            "CreditorAddress": "16, Billings Way Oregun",
            "CreditorCity": "Ikeja",
            "CreditorState": "Lagos",
            "CreditorFullAddress": "16, Billings Way Oregun Ikeja Lagos",
            "Legal_Status": "None",
            "Account_Status": "Performing",
            "Subscriber_Type_ID": "8",
            "Delinquency_Statements": "Non-performing (lost - 360 days) - 5 times",
            "PaymentProfile": "NNNNNN88888NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN"
            }
            ],
            "DelinquentAccounts": [],
            "ClosedAccounts": [
            {
            "Creditor_Registry_ID": "737566733492974312",
            "Account_No": "3108760917",
            "Abbreviated_Account_No": "3108760917",
            "Account_Owners": "John Doe",
            "Guarantors": "",
            "Date_Opened": "2024-04-10T00:00:00",
            "Account_Status_ID": 999,
            "Date_First_Reported": "2022-03-13T00:00:00",
            "Credit_Limit": 8000,
            "Balance": 0,
            "Minimum_Installment": 0,
            "Account_Type": "PL00",
            "Term": "30",
            "Purpose": "NA",
            "Account_Owner_Notes": "",
            "Creditor_Notes": "",
            "Collateral": "",
            "Collateral_Value": 0,
            "Legal_Status_ID": 0,
            "Legal_Status_Date": null,
            "LastUpdatedBy": "731102730822895925",
            "LastUpdated": "2024-06-20T13:49:21.393",
            "Unique_ID": "305083758",
            "Account_Status_Date": "2024-06-20T00:00:00",
            "Payment": 2500,
            "Payment_Date": "2021-11-20T00:00:00",
            "Balance_Date": "2024-06-20T00:00:00",
            "Term_Frequency": "monthly",
            "State_Change_Date": "2022-03-13T00:00:00",
            "Account_Type_Description": "Overdraft",
            "Currency": "NGN",
            "Collateral_Currency": "NGN",
            "CreditorName": "Blue Ridge Microfinance Bank Limited",
            "CreditorAddress": "16, Billings Way Oregun",
            "CreditorCity": "Ikeja",
            "CreditorState": "Lagos",
            "CreditorFullAddress": "16, Billings Way Oregun Ikeja Lagos",
            "Legal_Status": "None",
            "Account_Status": "Paid Off (Closed)",
            "Subscriber_Type_ID": "8",
            "Delinquency_Statements": "Non-performing (lost - 360 days) - 3 times",
            "PaymentProfile": "NNN00NNNNN08N08NN8N000000000000NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN"
            }
            ],
            "DerogatoryAccounts": [],
            "WrittenOffAccounts": [],
            "UnknownStatusAccounts": [],
            "InquiryHistory": [

            {
            "Subscriber_ID": "738048733426269511",
            "Subscriber": "Kuda Bank",
            "ContactPhone": "09032200350",
            "Reason": "KYCCheck",
            "InquiryDate": "2024-07-12T00:00:00"
            },

            {
            "Subscriber_ID": "737566733492974312",
            "Subscriber": "Blue Ridge Microfinance Bank Limited",
            "ContactPhone": "N/A",
            "Reason": "(Other)",
            "InquiryDate": "2024-02-21T00:00:00"
            },

            {
            "Subscriber_ID": "737248693595559931",
            "Subscriber": "NewEdge Finance Limited",
            "ContactPhone": "008618824674241",
            "Reason": "Auto credit",
            "InquiryDate": "2021-10-03T00:00:00"
            }
            ],
            "InquiryHistorySummary": {
            "Last3MonthCount": "3",
            "Last12MonthCount": "7",
            "Last36MonthCount": "9"
            },
            "Creditors": [
            {
            "Subscriber_ID": "7375692974312",
            "Name": "Blue Ridge Microfinance Bank Limited",
            "Phone": "",
            "Address": "16, Billings Way Oregun Ikeja Lagos"
            },
            {
            "Subscriber_ID": "7376458619969",
            "Name": "Branch International Financial Services Limited",
            "Phone": "",
            "Address": "4th floor, Etiebets place, 21-22 Mobolaji Bank Anthony Way Ikeja Lagos"
            },
            {
            "Subscriber_ID": "7376628525722",
            "Name": "MyCredit Investments Limited",
            "Phone": "017001276",
            "Address": "5, Collins Onabule Crescent, Diamond Estate, Magodo, \t\t Magodo Lagos"
            }
            ]
            },
            "SMARTScores": [
            {
            "RegistryID": "7380903395",
            "GenericScore": 186
            }
            ],
            "ScoreFactors": [
            {
            "RegistryID": "7380903395",
            "ScoreFactorType": "Negative Factor",
            "ScoreFactorNarrative": "Historical arrears on loan accounts"
            },
            {
            "RegistryID": "7380903395",
            "ScoreFactorType": "Positive Factor",
            "ScoreFactorNarrative": "Good credit history"
            },
            {
            "RegistryID": "7380903395",
            "ScoreFactorType": "Negative Factor",
            "ScoreFactorNarrative": "Historical arrears on current accounts"
            }
            ],
            "SBCs": [
            {
            "Registry_ID": "7380903395",
            "Enquiry_Date": "2024-08-06T00:00:00",
            "VAR001": "0",
            "VAR002": "0",
            "VAR003": 0,
            "VAR004": "0",
            "VAR005a": "0",
            "VAR005b": "0",
            "VAR005c": "0",
            "VAR005d": "0",
            "VAR005e": "0",

            }
            ],
            "AccountSummaries": [
            {
            "Currency": "NGN",
            "Count_Revolving": 0,
            "Balance_Revolving": 0,
            "CreditLimit_Revolving": 0,
            "Payment_Revolving": 0,
            "Count_Auto": 0,
            "Balance_Auto": 0,
            "CreditLimit_Auto": 0,
            "Payment_Auto": 0,
            "Count_Installment": 0,
            "Balance_Installment": 0,
            "CreditLimit_Installment": 0,
            "Payment_Installment": 0,
            "Count_Mortgage": 0,
            "Balance_Mortgage": 0,
            "CreditLimit_Mortgage": 0,
            "Payment_Mortgage": 0,
            "Count_Overdraft": 0,
            "Balance_Overdraft": 0,
            "CreditLimit_Overdraft": 0,
            "Minimum_Payment": 0,
            "Count_Other": 1,
            "Balance_Other": 0,
            "CreditLimit_Other": 6000,
            "Payment_Other": 0,
            "Balance_Total": 0,
            "Count_Total": 1,
            "CreditLimit_Total": 6000,
            "Payment_Total": 0
            }
            ],
            "PerformanceSummary": {
            "Inquiry_Count_12_Months": "68",
            "Count_AccountStatus_Closed": "4",
            "Count_AccountStatus_Delinquent_30_over_60_days": "0",
            "Count_AccountStatus_Derogatory_Doubtful_180": "0",
            "Count_AccountStatus_Derogatory_Lost_360": "0",
            "Count_AccountStatus_Derogatory_Substandard_90": "0",
            "Count_AccountStatus_Late_less_than_30_days": "0",
            "Count_AccountStatus_Open": "1",
            "Count_AccountStatus_Performing": "1",
            "Count_AccountStatus_Unknown": "0",
            "Count_AccountStatus_Unspecified": "0",
            "Count_AccountStatus_Written_off": "0",
            "Count_LegalStatus_Judgment": "0",
            "Count_LegalStatus_Litigation": "0",
            "Count_LegalStatus_Notice": "0",
            "Count_LegalStatus_Receivership": "0",
            "SectorExclusionCount": 0,
            "SectorExclusionMessage": ""
            },
            "Success": true,
            "Errors": [],
            "InfoMessage": "",
            "TransactionID": "32170935"
            }

            })
            }
            catch (err:any) {
                console.log(err);
                return res.status(err?.response?.status || 500).json({
                  status: err?.response?.status || 500,
                  message: err.message,
                  data: err?.response?.data,
                });
            }

            }
            export const BusinessReport = async (req: Request, res: Response, next: NextFunction) => {



            try {





            const { reportType, creditBureau, business_number } = <BusinessCreditReport>req.body;



              const BusinessValidate = BusinessReportValidation.validate(
              req.body,
              options
              );

              if (BusinessValidate.error) {
              return res
              .status(400)
              .json(BusinessValidate.error.details[0].message);
              }





              return res.status(200).json({

              "status": 200,
              "data": {
              "AccountData": {
              "PerformingAccounts": [
              {
              "Creditor_Registry_ID": "737566733492974312",
              "Account_No": "2211112211",
              "Abbreviated_Account_No": "2211112211",
              "Account_Owners": "John Doe",
              "Guarantors": "",
              "Date_Opened": "2021-11-12T00:00:00",
              "Account_Status_ID": 0,
              "Date_First_Reported": "2023-11-05T09:00:50.277",
              "Credit_Limit": 6000,
              "Balance": 0,
              "Minimum_Installment": 0,
              "Account_Type": "",
              "Term": "29",
              "Purpose": "NA",
              "Account_Owner_Notes": "",
              "Creditor_Notes": "",
              "Collateral": "",
              "Collateral_Value": 0,
              "Legal_Status_ID": 0,
              "Legal_Status_Date": null,
              "LastUpdatedBy": "737566733492974313",
              "LastUpdated": "2024-04-13T21:31:50.9",
              "Unique_ID": "333990757",
              "Account_Status_Date": "2024-03-31T00:00:00",
              "Payment": 0,
              "Payment_Date": "2024-03-31T00:00:00",
              "Balance_Date": "2024-03-31T00:00:00",
              "Term_Frequency": "monthly",
              "State_Change_Date": "2023-11-05T09:00:50.277",
              "Account_Type_Description": "",
              "Currency": "NGN",
              "Collateral_Currency": "NGN",
              "CreditorName": "Blue Ridge Microfinance Bank Limited",
              "CreditorAddress": "16, Billings Way Oregun",
              "CreditorCity": "Ikeja",
              "CreditorState": "Lagos",
              "CreditorFullAddress": "16, Billings Way Oregun Ikeja Lagos",
              "Legal_Status": "None",
              "Account_Status": "Performing",
              "Subscriber_Type_ID": "8",
              "Delinquency_Statements": "Non-performing (lost - 360 days) - 5 times",
              "PaymentProfile": "NNNNNN88888NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN"
              }
              ],
              "DelinquentAccounts": [],
              "ClosedAccounts": [
              {
              "Creditor_Registry_ID": "737566733492974312",
              "Account_No": "3108760917",
              "Abbreviated_Account_No": "3108760917",
              "Account_Owners": "John Doe",
              "Guarantors": "",
              "Date_Opened": "2024-04-10T00:00:00",
              "Account_Status_ID": 999,
              "Date_First_Reported": "2022-03-13T00:00:00",
              "Credit_Limit": 8000,
              "Balance": 0,
              "Minimum_Installment": 0,
              "Account_Type": "PL00",
              "Term": "30",
              "Purpose": "NA",
              "Account_Owner_Notes": "",
              "Creditor_Notes": "",
              "Collateral": "",
              "Collateral_Value": 0,
              "Legal_Status_ID": 0,
              "Legal_Status_Date": null,
              "LastUpdatedBy": "731102730822895925",
              "LastUpdated": "2024-06-20T13:49:21.393",
              "Unique_ID": "305083758",
              "Account_Status_Date": "2024-06-20T00:00:00",
              "Payment": 2500,
              "Payment_Date": "2021-11-20T00:00:00",
              "Balance_Date": "2024-06-20T00:00:00",
              "Term_Frequency": "monthly",
              "State_Change_Date": "2022-03-13T00:00:00",
              "Account_Type_Description": "Overdraft",
              "Currency": "NGN",
              "Collateral_Currency": "NGN",
              "CreditorName": "Blue Ridge Microfinance Bank Limited",
              "CreditorAddress": "16, Billings Way Oregun",
              "CreditorCity": "Ikeja",
              "CreditorState": "Lagos",
              "CreditorFullAddress": "16, Billings Way Oregun Ikeja Lagos",
              "Legal_Status": "None",
              "Account_Status": "Paid Off (Closed)",
              "Subscriber_Type_ID": "8",
              "Delinquency_Statements": "Non-performing (lost - 360 days) - 3 times",
              "PaymentProfile": "NNN00NNNNN08N08NN8N000000000000NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN"
              }
              ],
              "DerogatoryAccounts": [],
              "WrittenOffAccounts": [],
              "UnknownStatusAccounts": [],
              "InquiryHistory": [

              {
              "Subscriber_ID": "738048733426269511",
              "Subscriber": "Kuda Bank",
              "ContactPhone": "09032200350",
              "Reason": "KYCCheck",
              "InquiryDate": "2024-07-12T00:00:00"
              },

              {
              "Subscriber_ID": "737566733492974312",
              "Subscriber": "Blue Ridge Microfinance Bank Limited",
              "ContactPhone": "N/A",
              "Reason": "(Other)",
              "InquiryDate": "2024-02-21T00:00:00"
              },

              {
              "Subscriber_ID": "737248693595559931",
              "Subscriber": "NewEdge Finance Limited",
              "ContactPhone": "008618824674241",
              "Reason": "Auto credit",
              "InquiryDate": "2021-10-03T00:00:00"
              }
              ],
              "InquiryHistorySummary": {
              "Last3MonthCount": "3",
              "Last12MonthCount": "7",
              "Last36MonthCount": "9"
              },
              "Creditors": [
              {
              "Subscriber_ID": "7375692974312",
              "Name": "Blue Ridge Microfinance Bank Limited",
              "Phone": "",
              "Address": "16, Billings Way Oregun Ikeja Lagos"
              },
              {
              "Subscriber_ID": "7376458619969",
              "Name": "Branch International Financial Services Limited",
              "Phone": "",
              "Address": "4th floor, Etiebets place, 21-22 Mobolaji Bank Anthony Way Ikeja Lagos"
              },
              {
              "Subscriber_ID": "7376628525722",
              "Name": "MyCredit Investments Limited",
              "Phone": "017001276",
              "Address": "5, Collins Onabule Crescent, Diamond Estate, Magodo, \t\t Magodo Lagos"
              }
              ]
              },
              "SMARTScores": [
              {
              "RegistryID": "7380903395",
              "GenericScore": 186
              }
              ],
              "ScoreFactors": [
              {
              "RegistryID": "7380903395",
              "ScoreFactorType": "Negative Factor",
              "ScoreFactorNarrative": "Historical arrears on loan accounts"
              },
              {
              "RegistryID": "7380903395",
              "ScoreFactorType": "Positive Factor",
              "ScoreFactorNarrative": "Good credit history"
              },
              {
              "RegistryID": "7380903395",
              "ScoreFactorType": "Negative Factor",
              "ScoreFactorNarrative": "Historical arrears on current accounts"
              }
              ],
              "SBCs": [
              {
              "Registry_ID": "7380903395",
              "Enquiry_Date": "2024-08-06T00:00:00",
              "VAR001": "0",
              "VAR002": "0",
              "VAR003": 0,
              "VAR004": "0",
              "VAR005a": "0",
              "VAR005b": "0",
              "VAR005c": "0",
              "VAR005d": "0",
              "VAR005e": "0",

              }
              ],
              "AccountSummaries": [
              {
              "Currency": "NGN",
              "Count_Revolving": 0,
              "Balance_Revolving": 0,
              "CreditLimit_Revolving": 0,
              "Payment_Revolving": 0,
              "Count_Auto": 0,
              "Balance_Auto": 0,
              "CreditLimit_Auto": 0,
              "Payment_Auto": 0,
              "Count_Installment": 0,
              "Balance_Installment": 0,
              "CreditLimit_Installment": 0,
              "Payment_Installment": 0,
              "Count_Mortgage": 0,
              "Balance_Mortgage": 0,
              "CreditLimit_Mortgage": 0,
              "Payment_Mortgage": 0,
              "Count_Overdraft": 0,
              "Balance_Overdraft": 0,
              "CreditLimit_Overdraft": 0,
              "Minimum_Payment": 0,
              "Count_Other": 1,
              "Balance_Other": 0,
              "CreditLimit_Other": 6000,
              "Payment_Other": 0,
              "Balance_Total": 0,
              "Count_Total": 1,
              "CreditLimit_Total": 6000,
              "Payment_Total": 0
              }
              ],
              "PerformanceSummary": {
              "Inquiry_Count_12_Months": "68",
              "Count_AccountStatus_Closed": "4",
              "Count_AccountStatus_Delinquent_30_over_60_days": "0",
              "Count_AccountStatus_Derogatory_Doubtful_180": "0",
              "Count_AccountStatus_Derogatory_Lost_360": "0",
              "Count_AccountStatus_Derogatory_Substandard_90": "0",
              "Count_AccountStatus_Late_less_than_30_days": "0",
              "Count_AccountStatus_Open": "1",
              "Count_AccountStatus_Performing": "1",
              "Count_AccountStatus_Unknown": "0",
              "Count_AccountStatus_Unspecified": "0",
              "Count_AccountStatus_Written_off": "0",
              "Count_LegalStatus_Judgment": "0",
              "Count_LegalStatus_Litigation": "0",
              "Count_LegalStatus_Notice": "0",
              "Count_LegalStatus_Receivership": "0",
              "SectorExclusionCount": 0,
              "SectorExclusionMessage": ""
              },
              "Success": true,
              "Errors": [],
              "InfoMessage": "",
              "TransactionID": "32170935"
              }

              })
              }
              catch (err:any) {
                console.log(err);
                return res.status(err?.response?.status || 500).json({
                  status: err?.response?.status || 500,
                  message: err.message,
                  data: err?.response?.data,
                });
              }

              }