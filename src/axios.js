import axios from 'axios';

const instance = axios.create({
     baseURL : 'https://jsonplaceholder.typicode.com'
   // baseURL:  process.env.MY_BASE_URL
});

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN FROM INSTANCE';
console.log(instance.baseURL);
export default instance;