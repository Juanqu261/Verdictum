import axios from 'axios';

export const get = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (err) {
    throw new Error('API request failed');
  }
};
