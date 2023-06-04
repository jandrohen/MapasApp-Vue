<script lang="ts" src="./MapView.ts"/>

<template>
    <div ref="mapElement" v-show="isUserLocationReady" class="map-container" />

    <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>please wait</h3>
            <span>locating...</span>
        </div>
    </div>

</template>

<style scoped>
.map-container{
    position: fixed; 
    height: 100vh;
    width: 100vw;
    background-color: rebeccapurple;
}
.loading-map{
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
}
</style>