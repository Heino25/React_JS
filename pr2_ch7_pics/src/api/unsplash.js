import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID nRGmDIQumrSz3dzS2zwvvp2-jDQ2CxHHU1smbOEXKG0',
  },
});
