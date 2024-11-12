import { Request, Response, NextFunction } from "express";
// // import { AuthPayload } from "../dto/Auth.dot";
// // import jwt, { Secret } from 'jsonwebtoken'
// // import express, { Request, Response, NextFunction } from "express";
// // // import { SignatureValidation } from "../utility/PasswordGen";
// // // import { SignatureValidation } from "../utility/PasswordGen";
// // export const SignatureValidation = async (req:Request) => {

// //     const signature = req.get('Authorization')
   

// //         // if(!signature){
// //         //     return res.status(401).json({
// //         //         Error: "Kindly signin"
// //         //     })
// //         // }

// //     if(signature) {
// //         const payload = await jwt.verify(signature.split(" ")[1], secret) as AuthPayload
// //         req.user = payload

// //         return true
// //     }
// //     return false

// // }

// // declare global {
// //     namespace Express {
// //         interface Request{
// //             user?:AuthPayload
// //         }
// //     }
// // }

// // export const Authenticate = async (req: Request, res: Response, next: NextFunction) => {

// // try {
    

// //     const validate = await SignatureValidation(req)
// //     if(validate){
// // next()
// //     }else{
// //         return res.status(400).json({
// //             message: "User not Authroized"
// //         })
// //     }
// // } catch (error) {
// //     return res.status(500).json({message: "Invalid / expired Session"});
    
// // }
// // }


// import express, { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// const secret = process.env.JWT_SECRET as string;
// import { UserInstance } from '../models/users';

// export async function auth (req:Request | any,res:Response,next:NextFunction){
//   try{
//      const authorization = req.headers.authorization;
//      if(!authorization){
//          res.status(401)
//          res.json({
//              Error:'kindly sign in as a user'
//          })
//      }
    
//      const token = authorization?.slice(7,authorization.length) as string;
//      let verified = jwt.verify(token, secret);
 
//      if(!verified){
//          res.status(401)
//          res.json({
//              Error: 'User not verified, you cant access this route'
//          })
//          return
//      }
//      const {id} = verified as {[key:string]:string}
 
//      const user = await UserInstance.findOne({where:{id}})
//      if(!user){
//          res.status(404)
//          res.json({
//              Error:'user not verified'
//          })
//          return
//      }
//      req.user = verified;
//      next()
//   }catch (error){
//      res.status(500)
//      res.json({
//          Error:"user not logged in"
//      })
//      return
//   }
 
//  }


// const forge = require('node-forge');
// const pki = forge.pki;

// // Generate a new RSA key pair
// const keypair = pki.rsa.generateKeyPair(2048);

// // Convert the keys to PEM format
// const publicKey = pki.publicKeyToPem(keypair.publicKey);
// const privateKey = pki.privateKeyToPem(keypair.privateKey);

// console.log('Public Key:', publicKey);
// console.log('Private Key:', privateKey);





const staticBearerToken = 'Kingsike@thebest1234';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== `Bearer ${staticBearerToken}`) {
    return res.status(401).json({ message: "Invalid or missing authorization token." });
  }

  next();
};
