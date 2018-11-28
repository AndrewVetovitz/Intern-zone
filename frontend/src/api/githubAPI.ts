import axios from 'axios';

class GithubApi {
    public static login() {
        const URL = 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/authorize';
        const headers = {
            client_id: '9c5ade6df05ee7847376',
            redirect_url: 'http://localhost:3000'
        };
        const axiosConfig = {
            headers,
            crossdomain: true
        };

        return axios.get(URL, axiosConfig).then(response => {
            return response;
        }).catch(error => {
            return error;
        });
    }
}
  
export default GithubApi;
