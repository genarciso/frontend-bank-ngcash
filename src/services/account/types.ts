import { IAccount } from "../../models/IAccount"
import { ITransactions } from "../../models/ITransactions"

export interface IResponseBalance {
    result: IAccount
}

export interface IRequestTransferAmount {
    receiverUserUsername: string,
    value: number
}

export interface IResponseCheckTransactios {
    userTransactions: ITransactions[]
}