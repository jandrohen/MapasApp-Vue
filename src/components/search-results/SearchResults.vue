<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useMapStore, usePlacesStore } from '@/composables';
import { Feature } from '@/interfaces/places'

export default defineComponent({
  name: 'SearchResults',
  setup() {

    const { isLoadingPlaces, places, userLocation } = usePlacesStore();
    const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore();

    const activePlace = ref('');

    watch(places, (newPlaces) => {
        activePlace.value = '';
        setPlaceMarkers(newPlaces);
    });
    
    return {
        isLoadingPlaces,
        places,
        activePlace,

        onPlaceClicked: (place: Feature) => {
            activePlace.value = place.id;
            const [ lng, lat ] = place.center;
            map.value?.flyTo({
                center: [ lng, lat ],
                zoom: 14
            });
        },

        getRouteDirections: (place: Feature) => {
            if ( !userLocation.value ) return;
            const [ lng, lat ] = place.center;

            const [startLng, startLat] = userLocation.value;

            const start: [number, number] = [startLng, startLat];
            const end  : [number, number] = [lng, lat];

            getRouteBetweenPoints(start, end);
        }
    };
  },
});
</script>

<template>

    <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <h5>Loading</h5>
    <span>Places wait...</span>
    </div>


<ul v-else-if="places.length > 0"
     class="list-group mt-3">

<li v-for="place in places"
    class="list-group-item list-group-item-action"
    :class="{ active: activePlace === place.id }"
    :key="place.id" 
    @click="onPlaceClicked( place )">

    <h5>{{ place.text }}</h5>

    <p>{{ place.place_name }}</p>

    <div align="right">
        <button 
            class="btn btn-outline-primary btn-sm"
            :class="( place.id === activePlace ) ? 'btn-outline-light' : 'btn-outline-primary'"
            @click.self="getRouteDirections( place )"
        >
            Adresses
        </button>
    </div>

</li>

</ul>
</template>

<style scoped>

li {
    cursor: pointer;
}

h5 {
    font-size: 1rem !important; 
}

p {
    font-size: 0.7rem !important;
}

</style>