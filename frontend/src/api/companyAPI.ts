import axios from 'axios';

class CompanyApi {
    public static getAllCompanyNames() {
        const URL = '/company/all';

        return axios.get(URL).then(response => {
            return response.data.companies;
        }).catch(error => {
            return error;
        });
    }
}
  
export default CompanyApi;
