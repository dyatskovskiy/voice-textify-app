export interface IUser {
  id: number;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updateAt: Date;
}
export interface IUserDto {
  clerkId: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
}
