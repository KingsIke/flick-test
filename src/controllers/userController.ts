// import { Request, Response, NextFunction } from "express";
// import axios from "axios";
// import { UserLoginInput } from "../dto/Userpayload";
// import { LoginUserValidate, options } from "../util/utils";

// export const createAdmin = async ( req: Request, res: Response, next: NextFunction )=> {
// }

// export const LoginAdmin = async (req: Request, res: Response, next:NextFunction) => {
//     }


//     // export const VendorLogin = async (req: Request, res: Response, next: NextFunction) => {

//     //     const { email, password } = <UserLoginInput>req.body
//     //     try {
    
    
    
//     //         // Validation
//     //         const LoginUser = LoginUserValidate.validate(
//     //             req.body,
//     //             options
//     //         );
    
//     //         if (LoginUser.error) {
//     //             // console.log(validateVendorCreate.error)
//     //             return res
//     //                 .status(400)
//     //                 .json(LoginUser.error.details[0].message);
//     //         }
    
    
    
//     //         const existingVendor = await FindVendor("", email)
    
//     //         if (existingVendor !== null) {
    
//     //             const signature = await GenerateSignature({
//     //                 _id: existingVendor.id,
//     //                 email: existingVendor.email,
//     //                 foodType: existingVendor.foodType,
//     //                 name: existingVendor.name
//     //             })
    
//     //             const Validation = await validatePassword(password, existingVendor.password, existingVendor.salt)
//     //             // if(password ===existingVendor.password ){
//     //             // }
//     //             if (Validation) {
//     //                 return res.status(200).json({ message: "You have Successfully logged In", signature })
//     //             } else {
//     //                 // return res.status(400).json("Wrong Password")
//     //                 return res.status(400).json({ message: "Wrong password" })
    
//     //             }
//     //         }
//     //         return res.status(400).json("Invalid Login Credentials")
    
//     //     } catch (error) {
//     //         return res.status(500).json({ Error: (error as Error).message });
//     //     }
//     // }