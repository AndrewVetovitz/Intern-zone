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

        return UserApi.postResponse(URL, userData);
    }

    public static loginUser(userData: UserLogin) {
        const URL = SERVER_URL + '/api/user/login';

        return UserApi.postResponse(URL, userData);
    }

    public static resetUserPassword(userData: UserUtility) {
        const URL = SERVER_URL + '/api/user/reset_password';

        return UserApi.postResponse(URL, userData);
    }

    public static confirmUserEmail(userData: UserUtility) {
        const URL = SERVER_URL + '/api/user/confirm_email';

        return UserApi.postResponse(URL, userData);
    }

    public static unlockUserAccount(userData: UserUtility) {
        const URL = SERVER_URL + '/api/user/account_unlock';

        return UserApi.postResponse(URL, userData);
    }

    private static postResponse(URL: string, data: UserSignUp | UserLogin | UserUtility) {
        return axios.post(URL, data).then(response => {
            return response;
        }).catch(error => {
            return error.response;
        });
    }
}

export default UserApi;
