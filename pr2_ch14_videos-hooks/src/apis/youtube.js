import axios from 'axios';
// API request over to youtube
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
// AIzaSyBbC8YYxbBeBGvghRYtLC74yamksGMO_7Q