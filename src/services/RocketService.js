import api from './axios-client';

const rocketService = {
  getById: (id) => api.get(`/rockets/${id}`)
};

export default rocketService;
