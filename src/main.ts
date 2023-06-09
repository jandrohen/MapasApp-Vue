import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import mapboxgl from  'mapbox-gl';
mapboxgl.accessToken = process.env.VUE_APP_API_MAPBOX_KEY;


 if ( !navigator.geolocation){
    alert('Geolocation is not supported by your browser');
    throw new Error('Geolocation is not supported by your browser')
 }
 
createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
