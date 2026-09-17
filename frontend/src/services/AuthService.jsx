import axios from 'axios';

const AUTH_API =
  "https://jbn-employee-management-system.onrender.com/api/auth/login";

class AuthService {
  login(user) {
    return axios.post(AUTH_API, user);
  }
}

export default new AuthService();