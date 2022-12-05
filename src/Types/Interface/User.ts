export interface IUser{
    _id:string;
    username:string;
    email:string;
    password:string;
    createdAt:string;
    updatedAt:string;
}
export interface UserLogin {
    fullname: string;
    email: string;
    isAdmin: boolean;
    updatedAt: string;
    phone: string;
    _id: string;
  }