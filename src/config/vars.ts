const dotenv = require('dotenv')


dotenv.config();


export const baseUrl_test = String(process.env.CRE_BU_BASE_URL);
export const baseUrl_live = String(process.env.CRE_BU_LIVE_URL);
export const email_key = String(process.env.CRE_EMAIL);
export const password_key = String(process.env.CRE_PASSWORD);
export const subscriber_id = String(process.env.CRE_SUBSCRIBERID)





