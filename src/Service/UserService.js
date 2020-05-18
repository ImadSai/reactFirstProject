import axios from "axios";
import { myConfig } from '../Config/Config';

export default class UserService {

    constructor() {
        // User API
        this.backendUserApi = myConfig.apiUrl + '/user';

        // Authen API
        this.backendAuthApi = myConfig.apiUrl + '/auth';
    }

    login = (emailUser, passwordUser) => {
        return axios.post(this.backendAuthApi + '/login', { email: emailUser, password: passwordUser });
    }

} 