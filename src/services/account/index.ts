import { ITransactions } from "../../models/ITransactions";
import { axiosInstance } from "../axiosInstance";
import { IRequestMethods } from "../requestsMethod";
import { getAuthHeaders } from "../utils/headers";
import { IRequestTransferAmount, IResponseBalance, IResponseCheckTransactios } from "./types";

export class AccountAPI implements IRequestMethods {
    url = '/user';

    getBalance() {
        return axiosInstance.get<IResponseBalance>(this.url + '/balance', {
            headers: getAuthHeaders()
        });
    }

    postTrasferAmount(data: IRequestTransferAmount) {
        return axiosInstance.post<ITransactions>(this.url + '/transfer', data, {
            headers: getAuthHeaders()
        });
    }

    getCheckTransactions(paramsSearch = {}) {
        return axiosInstance.get<IResponseCheckTransactios>(this.url + '/transactions/', {
            headers: getAuthHeaders(),
            params: paramsSearch
        });
    }


}