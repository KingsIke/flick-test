export interface AdminPayLoad{
    _id: string,
    email: string,
    name: string,
    role: string
}
export interface CreateAdminInput{
    name:string,
    pincode: string,
    address: string,
    phone:string,
    email:string,
    password:string,
    role:string,

    
}



export interface UserLoginInput{
    email: string,
    password: string
}