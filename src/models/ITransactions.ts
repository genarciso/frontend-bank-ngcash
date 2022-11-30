import { IAccount } from "./IAccount";

export interface ITransactions {
    id: string;
    value: number;
    createdAt: Date;
    debitedAccountId: string;
    debitedAccount?: IAccount;
    cretidedAccountId: string;
    cretidedAccount?: IAccount;
}