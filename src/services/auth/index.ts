import { axiosInstance } from "../axiosInstance";
import { IRequestMethods } from "../requestsMethod";
import { ILoginRequestData, ILoginResponse } from "./types";

export class AuthAPI implements IRequestMethods {
    url = '/login';
  
    login(data: ILoginRequestData) {
      return axiosInstance.post<ILoginResponse>(this.url, data);
    }
}