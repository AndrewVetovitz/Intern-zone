import axios from 'axios';

import { SERVER_URL } from './../constants';

export interface UserSignUp {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

class UserApi {
    public static signUpUser(userData: UserSignUp) {
        const URL = SERVER_URL + '/api/user/signup';

        return axios.post(URL, userData).then(response => {
            return response;
        }).catch(error => {
            return error.response;
        });
    }
}

export default UserApi;
