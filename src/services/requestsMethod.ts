import { AxiosResponse } from "axios";

export interface IRequestMethods<T = any, D = any> {
    url: string;
    get?: () => Promise<AxiosResponse<T, D>>;
    post?: (data: T) => Promise<AxiosResponse<T, D>>;
  }