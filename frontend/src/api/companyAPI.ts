import axios from 'axios';

class CompanyApi {
    static getAllCompanyNames() {
        const URL = '/company/all';

        return axios.get(URL).then(response => {
            return response;
        }).catch(error => {
            return error;
        });
    }
}
  
export default CompanyApi;
