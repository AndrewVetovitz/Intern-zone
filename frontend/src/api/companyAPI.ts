import axios from 'axios';

import { SERVER_URL } from '../constants';

class CompanyApi {
    public static getAllCompanyNames() {
        const URL = SERVER_URL + '/api/company/all';

        return axios.get(URL);
    }

    public static getCompanyByName(name: string) {
        const URL = SERVER_URL + '/api/company/' + name;

        return axios.get(URL);
    }
}
  
export default CompanyApi;
