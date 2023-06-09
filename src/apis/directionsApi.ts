import axios from 'axios';

const directionsApi = axios.create({
    baseURL: process.env.VUE_APP_API_MAPBOX_DIRECTIONS_URL,
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: process.env.VUE_APP_API_MAPBOX_KEY
    }
});

export default directionsApi;