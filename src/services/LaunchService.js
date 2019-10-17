import axios from 'axios';
import Common from "./constants";

const api = axios.create();

const launchService = {
  get: () => api.get(`${Common.BASE_URI}/${Common.LAUNCHES}`)
};

export default launchService;