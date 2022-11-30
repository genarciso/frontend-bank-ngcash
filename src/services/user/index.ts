import { axiosInstance } from "../axiosInstance";
import { IRequestMethods } from "../requestsMethod";
import { ICreateUserRequest } from "./types";

export class UserAPI implements IRequestMethods {
    url = '/user';

    post(data: ICreateUserRequest) {
        return axiosInstance.post(this.url, data);
    }
}