import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

export default {
  fetchHackathons() {
    return http.get('https://hackathon-rails-api.herokuapp.com/hackathons');
  },
  fetchHackathonById(id) {
    return http.get(`https://hackathon-rails-api.herokuapp.com/hackathons/${id}`);
  }
};
