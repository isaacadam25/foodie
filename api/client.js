import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'https://development.aa.am/public/api',
});

export default apiClient;
