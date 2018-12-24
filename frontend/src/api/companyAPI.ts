import axios from 'axios';

import { SERVER_URL } from '../constants';

class CompanyApi {
    public static getAllCompanyNames() {
        const URL = SERVER_URL + '/api/company/all';

        return axios.get(URL).then(response => {
            return response.data.companies;
        }).catch(error => {
            return error;
        });
    }

    public static getCompanyByName(name: string) {
        const URL = SERVER_URL + '/api/company/' + name;

        return axios.get(URL).then(response => {
            return response.data.company;
        }).catch(error => {
            return error;
        });
    }
}
  
export default CompanyApi;
