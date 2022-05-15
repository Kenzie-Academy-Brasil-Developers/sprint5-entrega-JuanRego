export interface IUser {
  name: string;
  email: string;
  password: string;
  age: number;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUserListOne {
  id: string;
}
