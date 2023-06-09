<script lang="ts">
import { defineComponent, onMounted, watch, ref } from "vue";
import Mapboxgl from  'mapbox-gl';

import { usePlacesStore } from "@/composables";

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const {  isUserLocationReady, userLocation} = usePlacesStore();

        const initMap = async () => {
            if ( !mapElement.value )  throw new Error('Map element is not defined');
            if ( !userLocation.value ) throw new Error('User location is not defined');

            await Promise.resolve();

            new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: "mapbox://styles/mapbox/streets-v11", // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
                });

        }
        
        onMounted(() => {
            if ( isUserLocationReady.value )
             return initMap();
        });
        
        watch(isUserLocationReady, () => {
            if (isUserLocationReady.value) initMap();
        });

        return {
            mapElement,
            isUserLocationReady
            
        }
    }
});
</script>

<template >
    <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>please wait</h3>
            <span>locating...</span>
        </div>
    </div>
    <div v-show="isUserLocationReady" ref="mapElement"  class="map-container" />

</template>

<style scoped>
.map-container{
    position: fixed; 
    height: 100vh;
    width: 100vw;
}
.loading-map{
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 9999;
}
</style>