export interface TransmitKYBInput {
    companyName: string;
    firstName: string;
    lastName: string;
    incNumber: string;
    business_email: string;
    dated: string;
    business_address: string;
    country: string;
    website: string;
    IncCertificate: string;
    IncMemart: string;
    proofOfBizAddress: ProofOfBizAddress;
    directors: Director[];
    shareholders: Shareholder[];
}

interface Director {
    fullName: string;
    position: string;
    bvn: string;
    idNumber: string;
    idType: string;
    idCard: string;
  }
  
  interface Shareholder {
    percOfShare: string;
    fullName: string;
  }
  
  interface ProofOfBizAddress {
    doc: string;
    type: string;
  }
 export  interface BalanceMisc {
    category: string;
    currency: string;
  }
 export  interface webhookUrlMisc {
    transactionId: string;
   
  }
  

  