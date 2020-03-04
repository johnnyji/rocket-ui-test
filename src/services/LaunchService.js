import api from './axios-client';

const launchService = {
  get: () => api.get('/launches')
};

export default launchService;
