export type UserRole = "Admin" | "Customer";

export interface IUser {
  name: string;
  email: string;
  password: string;    
  role?: UserRole;       
  createdAt?: Date;
  updatedAt?: Date;
}
