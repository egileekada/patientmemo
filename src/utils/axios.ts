import axios from 'axios'; 
import { API_BASE_ENDPOINT } from '../BasicUrl';

export default axios.create({
  baseURL: API_BASE_ENDPOINT
})