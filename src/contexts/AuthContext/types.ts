import { ILoginRequestData } from "../../services/auth/types";

export interface IAccessToken {
    access_token: string;
}

export type AuthContextType = {
    accessToken: IAccessToken | undefined;
    setAccessToken: (data: IAccessToken | undefined) => void;
    login: (data: ILoginRequestData) => void;
    logout: () => void;
};