import axios from 'axios';

// URL API : .env.development (local) ou .env.production (build Vercel)
export default axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
