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

    public static getCompanyByName(name: string) {
        const URL = 'http://localhost:3000/api/company/' + name;

        return axios.get(URL).then(response => {
            return response.data.company;
        }).catch(error => {
            return error;
        });
    }
}
  
export default CompanyApi;
