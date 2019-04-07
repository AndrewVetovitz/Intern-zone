import axios from 'axios';

import { SERVER_URL } from './../constants';

export interface UserSignUp {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface UserLogin {
    email: string,
    password: string
}

export interface UserUtility {
    email: string;
}

class UserApi {
    public static signUpUser(userData: UserSignUp) {
        const URL = SERVER_URL + '/api/user/signup';

        return axios.post(URL, userData);
    }

    public static loginUser(userData: UserLogin) {
        const URL = SERVER_URL + '/api/user/login';

        return axios.post(URL, userData);
    }

    public static resetUserPassword(userData: UserUtility) {
        const URL = SERVER_URL + '/api/user/reset_password';

        return axios.post(URL, userData);
    }

    public static confirmUserEmail(userData: UserUtility) {
        const URL = SERVER_URL + '/api/user/confirm_email';

        return axios.post(URL, userData);
    }

    public static unlockUserAccount(userData: UserUtility) {
        const URL = SERVER_URL + '/api/user/unlock_account';

        return axios.post(URL, userData);
    }
}

export default UserApi;
