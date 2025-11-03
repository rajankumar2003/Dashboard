import axios from 'axios';
const API_URL = 'http://localhost:8080/api/stocks';

export const getSupported = async () => {
  const res = await axios.get(`${API_URL}/supported`);
  return res.data;
};

export const getCurrentPrices = async () => {
  const res = await axios.get(`${API_URL}/prices`);
  return res.data;
};
