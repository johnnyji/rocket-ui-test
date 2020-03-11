import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const serviceUrl = `${SERVICES_URL}/rockets`;

const api = axios.create();
const rocketCache = {};

const rocketService = {
  get: (id) => {
    return new Promise((resolve) => {
      if (rocketCache[id]) {
        resolve(rocketCache[id]);
      }

      api.get(`${serviceUrl}/${id}`).then((resp) => {
        rocketCache[id] = resp.data;
        resolve(resp.data);
      });
    })
  }
};

export default rocketService;
