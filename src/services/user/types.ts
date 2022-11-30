import { IUser } from "../../models/IUser";

export interface ICreateUserResponse {
    user: IUser;
}

export interface ICreateUserRequest {
    username: string;
    password: string;
}