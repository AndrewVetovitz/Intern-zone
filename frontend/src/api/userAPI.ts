import axios from 'axios';

export interface UserSignUp {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

class UserApi {
    public static signUpUser(userData: UserSignUp) {
        const URL = 'http://localhost:5000/api/user/signup';

        return axios.post(URL, userData).then(response => {
            return response;
        }).catch(error => {
            return error.response;
        });
    }
}

export default UserApi;
