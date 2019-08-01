import axios from 'axios';

/** Constants */
import { APP_ID } from './constants';

const API = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: APP_ID,
  },
});

// export singleton instance
export default API;
