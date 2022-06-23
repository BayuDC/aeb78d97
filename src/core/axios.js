import axios from 'axios';
import { apiUrl } from './config';

export default axios.create({
    baseURL: apiUrl,
});
