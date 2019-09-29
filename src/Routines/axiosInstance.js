import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://wger.de/api/v2/'
});

export default instance;