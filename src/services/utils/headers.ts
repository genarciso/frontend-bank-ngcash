import { IAccessToken } from "../../contexts/AuthContext/types";

export function getAuthHeaders() {
    const accessTokenString = window.localStorage.getItem(
      '@ngCash/access_token'
    );
    const accessToken: IAccessToken =
      accessTokenString !== null ? JSON.parse(accessTokenString) : undefined;
  
    const headers = {
      Authorization: `Bearer ${accessToken.access_token}`
    };
    return headers;
}