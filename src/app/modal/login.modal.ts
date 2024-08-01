export interface loginDetails {
    username: string;
    password: string;
}

export interface loginResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
    refreshToken: string;
}