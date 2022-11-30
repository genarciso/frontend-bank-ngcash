import { IAccount } from "./IAccount";

export interface IUser {
    id?: string;
    username: string;
    password: string;
    accountId: string;
    account?: IAccount;
}