import axios from 'axios';
import Common from "./constants";

const api = axios.create();

const rocketService = {
  get: (rocketId) => api.get(`${Common.BASE_URI}/${Common.ROCKETS}/${rocketId}`)
};

export default rocketService;