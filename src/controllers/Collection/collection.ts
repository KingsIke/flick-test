import { Request, Response, NextFunction } from "express";
import {
  CardPaymentInput,
  CheckoutInput,
  DirectDebitInitialInput,
  DirectDebitOneInput,
  OTPPaymentInput,
  PinPaymentInput,
  TransationHistoryInput,
} from "../../dto/collection";
import {
  CardDetailsValidation,
  CardOTPValidation,
  CheckoutValidation,
  DirectDebitOneTimeValidation,
  DirectDebitStatusValidation,
  DirectDebitValidation,
  options,
  PinValidation,
  TransationHistoryValidation,
} from "../../util/utils";

import { v4 as uuidv4 } from "uuid";
import {
  encrypter,
  decrypter,
  determinePaymentType,
} from "../../Helper/helper";


export const InitializeReOccuring = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      transationId,
      bvn,
      phone_no,
      email,
      address,
      amount,
      start_date,
      end_date,
      frequency,
      currency_collected,
      redirectUrl,
      webhookUrl,
    } = <DirectDebitInitialInput>req.body;

    const directDebitValidate = DirectDebitValidation.validate(
      req.body,
      options
    );

    if (directDebitValidate.error) {
      return res.status(400).json(directDebitValidate.error.details[0].message);
    }

    return res.status(200).json({
      status: 200,
      CustomerCode: "Flick-dfoi_453jfk-bjigl56",
      transationId: "7add-4070-b01e-323f9cb763d7",
      dated: "2024-04-11T13:56:#@.874Z",
      mandate_status: "daily",
      total_expected_deduction: 18,
      frequency: "daily",
      amount_per_charge: "1000",
      total_charge_amount: "15000",
      url: "https://linkflick.co/pages/wwwwwiiii",
    });
  } catch (err: any) {
    console.log(err);
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message: err.message,
      data: err?.response?.data,
    });
  }
};
export const InitializeOneTime = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      transationId,
      bvn,
      phone_no,
      email,
      address,
      amount,
      charge_date,
      currency,
      redirectUrl,
      webhookUrl,
    } = <DirectDebitOneInput>req.body;

    const directDebitValidate = DirectDebitOneTimeValidation.validate(
      req.body,
      options
    );

    if (directDebitValidate.error) {
      return res.status(400).json(directDebitValidate.error.details[0].message);
    }

    return res.status(200).json({
      status: 200,
      CustomerCode: "dfoi_453jfk-bjigl56",
      transationId: "7add-4070-b01e-323f9cb763d7",
      directdebitReference: "9034j-4070-b01e-kir48503245",
      dated: "2024-04-11T13:56:#@.874Z",
      mandate_status: "daily",
      total_expected_deduction: 18,
      frequency: "daily",
      amount_per_charge: "1000",
      total_charge_amount: "15000",
      url: "https://linkflick.co/pages/wwwwwiiii",
    });
  } catch (err: any) {
    console.log(err);
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message: err.message,
      data: err?.response?.data,
    });
  }
};

export const DirectDebitStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const transationId = req.query.transationId;

    const directDebitValidate = DirectDebitStatusValidation.validate(
      req.query,
      options
    );

    if (directDebitValidate.error) {
      return res.status(400).json(directDebitValidate.error.details[0].message);
    }

    return res.status(200).json({
      status: 200,
      message: "successfully fetched data",
      data: {
        transationId: "7add-4070-b01e-323f9cb763d7",
        message: "Dwirect debit has been approved by bank",
        mandate_status: "00",
        dated: "2024-04-11",
        amount_per_charge: "1000",
        frequency: "daily",
        total_expected_deduction: 18,
        total_completed_deduction: 8,
        total_remaining_deduction: 10,
      },
    });
  } catch (err: any) {
    console.log(err);
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message: err.message,
      data: err?.response?.data,
    });
  }
};

export const DirectDebitHistory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).json({
      status: 200,
      data: [
        {
          dated: "2024-04-11T12:23:21+00:23",
          transationId: "7add-4070-b01e-323f9cb763d7",
          tennor: "Daily",
          amount: 23000,
          start_date: "01 June 2024",
          end_date: "32 June 2024",
          active: "initiated",
          url: "https://linkflick.co/pages/wwwwwiiii",
          pagename: "open banking",
        },
        {
          dated: "2023-04-11T12:23:21+00:23",
          transationId: "f7343qwfd-4070-b01e-323f9cb763d7",
          tennor: "Daily",
          amount: 23000,
          start_date: "01 June 2024",
          end_date: "32 June 2024",
          active: "initiated",
          url: "https://linkflick.co/pages/wwwwwiiii",
          pagename: "open banking",
        },
      ],
    });
  } catch (err: any) {
    console.log(err);
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message: err.message,
      data: err?.response?.data,
    });
  }
};

export const CancelDirectDebit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const transationId = req.body;

    const directDebitValidate = DirectDebitStatusValidation.validate(
      req.body,
      options
    );

    if (directDebitValidate.error) {
      return res.status(400).json(directDebitValidate.error.details[0].message);
    }

    return res.status(200).json({
      status: 200,
      message: "mandate successfully deactivated",
      data: [],
    });
  } catch (err: any) {
    console.log(err);
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message: err.message,
      data: err?.response?.data,
    });
  }
};
export const TransationHistory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, currency, limit, data_begin, date_end } = <
      TransationHistoryInput
    >req.body;

    const directDebitValidate = TransationHistoryValidation.validate(
      req.body,
      options
    );

    if (directDebitValidate.error) {
      return res.status(400).json(directDebitValidate.error.details[0].message);
    }

    return res.status(200).json({
      status: 200,
      data: [
        {
          dated: "2024-04-11T12:23:21+00:23",
          transationId: "7add-4070-b01e-323f9cb763d7",
          tennor: "Daily",
          amount: 23000,
          start_date: "01 June 2024",
          end_date: "32 June 2024",
          active: "initiated",
          url: "https://linkflick.co/pages/wwwwwiiii",
          pagename: "open banking",
        },
        {
          dated: "2023-04-11T12:23:21+00:23",
          transationId: "f7343qw    fd-4070-b01e-323f9cb763d7",
          tennor: "Daily",
          amount: 23000,
          start_date: "01 June 2024",
          end_date: "32 June 2024",
          active: "initiated",
          url: "https://linkflick.co/pages/wwwwwiiii",
          pagename: "open banking",
        },
      ],
    });
  } catch (err: any) {
    console.log(err);
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message: err.message,
      data: err?.response?.data,
    });
  }
};
export const Checkout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      amount,
      Phoneno,
      currency_collected,
      currency_settled,
      email,
      redirectUrl,
      webhookUrl,
      transationId,
    } = <CheckoutInput>req.body;

    const checkoutValidate = CheckoutValidation.validate(req.body, options);

    if (checkoutValidate.error) {
      return res.status(400).json(checkoutValidate.error.details[0].message);
    }

    return res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Transaction created successfully",
      data: {
        transactionId: "Flick-d1f9fbf1-ae32-4dfa-9ade-e8ed40e47b8e",
        url: "https://payflick.co/pages/kCOMan",
        currency: "NGN",
        currency_collected: "NGN",
        nairaEquivalent: 162050,
        amount: 10000,
        charges: 0,
        amountPayable: "162066.21",
        payableFxAmountString: "$100.00",
        payableAmountString: "₦162,066.21",
        rate: 1620.5,
        currency_settled: "USD",
      },
    });
  } catch (err: any) {
    console.log(err);
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message: err.message,
      data: err?.response?.data,
    });
  }
};
export const CardPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cardNumber, cvv, cardDate, cardName, amount } = <CardPaymentInput>(
      req.body
    );

    const transactionId = `Flick-${uuidv4()}`;

    const CardValidate = CardDetailsValidation.validate(req.body, options);

    if (CardValidate.error) {
      return res.status(400).json(CardValidate.error.details[0].message);
    }
    const paymentType = determinePaymentType(cardNumber);
    console.log(paymentType);

    if (!paymentType) {
      return res
        .status(400)
        .json({ message: "Invalid card number use unsupported card" });
    }

    const cardDetails = `${cardNumber.replace(
      /\s+/g,
      ""
    )}|${cvv}|${cardDate}|${cardName.replace(
      /\s+/g,
      ""
    )}|${transactionId}|${amount}`;
    console.log(`Card details before encryption: ${cardDetails}`);

    const encWord = encrypter(cardDetails);

    if (!encWord) {
      console.error("Ensure the input data are correct.");
      return res.status(500).json({ message: "Incorrect input format" });
    }

    return res.status(200).json({
      status: "success",
      requireAuth: "true",
      transactionNumber: transactionId,
      cardDetails: encWord,
      authorizationMode: "otp/pin",
      authorizationFields: paymentType,
      amount: amount,
      message: `Waiting for ${paymentType} / Please send ${paymentType}`,
    });
  } catch (err: any) {
    console.log(err);
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message: err.message,
      data: err?.response?.data,
    });
  }
};
export const CardOTPPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { transactionNumber, encryptedCardDetails, otp } = <OTPPaymentInput>(
      req.body
    );
    const correctOTP: string = "411421";

    const CardValidate = CardOTPValidation.validate(req.body, options);

    if (CardValidate.error) {
      return res.status(400).json(CardValidate.error.details[0].message);
    }
    const decryptedCardDetails = decrypter(encryptedCardDetails);

    if (!decryptedCardDetails) {
      return res.status(500).json({ message: "Wrong CardDetails" });
    }

    const carDetails = decryptedCardDetails.split("|");
    console.log(carDetails);
    const [cardNumber, cvv, cardDate, cardName, transactionId, amount] =
      carDetails;

    const paymentType = determinePaymentType(cardNumber);
    console.log(paymentType);
    if (transactionId !== transactionNumber) {
      return res.status(400).json({
        message: "Wrong transation number",
      });
    }

    if (paymentType === "OTP" && otp === correctOTP) {
      return res.status(200).json({
        status: 200,
        data: {
          message: "Success",
          redirecturl: "?trxref=............",
          reference: transactionId,
          response: "Approved",
          status: "success",
          trans: "3137876558",
          trxref: `Flick-${uuidv4()}`,
        },
      });
    }
    return res.status(400).json({
      message: "Incorrect payment failed",
    });
  } catch (err: any) {
    console.log(err);
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message: err.message,
      data: err?.response?.data,
    });
  }
};
export const CardPinPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { transactionNumber, encryptedCardDetails, pin } = <PinPaymentInput>(
      req.body
    );
    const correctPin: string = "421512";

    const CardValidate = PinValidation.validate(req.body, options);

    if (CardValidate.error) {
      return res.status(400).json(CardValidate.error.details[0].message);
    }
    const decryptedCardDetails = decrypter(encryptedCardDetails);

    if (!decryptedCardDetails) {
      return res.status(500).json({ message: "Wrong CardDetails" });
    }

    const carDetails = decryptedCardDetails.split("|");
    console.log(carDetails);
    const [cardNumber, cvv, cardDate, cardName, transactionId, amount] =
      carDetails;

    const paymentType = determinePaymentType(cardNumber);
    console.log(paymentType);
    if (transactionId !== transactionNumber) {
      return res.status(400).json({
        message: "Wrong transation number",
      });
    }

    if (paymentType === "PIN" && pin === correctPin) {
      return res.status(200).json({
        status: 200,
        data: {
          message: "Success",
          redirecturl: "?trxref=............",
          reference: transactionId,
          response: "Approved",
          status: "success",
          trans: "3137876558",
          trxref: `Flick-${uuidv4()}`,
        },
      });
    }
    return res.status(400).json({
      message: "Incorrect payment failed",
    });
  } catch (err: any) {
    console.log(err);
    return res.status(err?.response?.status || 500).json({
      status: err?.response?.status || 500,
      message: err.message,
      data: err?.response?.data,
    });
  }
};
