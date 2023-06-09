import axios from 'axios';

const searchApis = axios.create({
    baseURL: process.env.VUE_APP_API_MAPBOX_URL,
    params: {
        limit: 5,
        language: 'es',
        access_token: process.env.VUE_APP_API_MAPBOX_KEY
    }
});

export default searchApis;