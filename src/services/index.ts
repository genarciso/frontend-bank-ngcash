import { AccountAPI } from "./account"
import { AuthAPI } from "./auth"
import { UserAPI } from "./user"

const api = {
    auth: new AuthAPI(),
    user: new UserAPI(),
    account: new AccountAPI()
}

export { api }