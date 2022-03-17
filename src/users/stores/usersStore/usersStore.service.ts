import axios from 'axios';
import { UsersModel } from '../../models';

const baseApiUrl = 'https://jsonplaceholder.typicode.com';

const service = {
  getUsersData(): Promise<UsersModel[]> {
    return axios.get(`${baseApiUrl}/users`).then((response) => response.data);
  },
};

export default service;
