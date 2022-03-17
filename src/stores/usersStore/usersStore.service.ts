import axios from 'axios';

const baseApiUrl = 'http://localhost:8080';

interface SomeData {
  address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
company: {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
email: "Sincere@april.biz"
id: 1
name: "Leanne Graham"
phone: "1-770-736-8031 x56442"
username: "Bret"
website: "hildegard.org"
}

const service = {
  getSomeData(): Promise<SomeData> {
    return axios.get(`${baseApiUrl}/someData`).then((response) => response.data);
  },
};

export default service;
