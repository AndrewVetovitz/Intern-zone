import axios from 'axios';

class CompanyApi {
    public static getAllCompanyNames() {
        const URL = 'http://localhost:3000/api/company/all';

        return axios.get(URL).then(response => {
            return response.data.companies;
        }).catch(error => {
            return error;
        });
    }
}
  
export default CompanyApi;
