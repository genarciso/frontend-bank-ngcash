import { ITransactions } from "./ITransactions";
import { IUser } from "./IUser";

export interface IAccount {
    id: string
    balance: number;
    user?: IUser;
    debitedTrasactions: ITransactions[];
    creditedTrasactions: ITransactions[];
}