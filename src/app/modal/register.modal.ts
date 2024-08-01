export interface AddNewUser {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

export interface AddNewUserResponse extends AddNewUser {
    id: number;
}