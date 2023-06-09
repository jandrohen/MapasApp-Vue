<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchResults',
  setup() {

    const { isLoadingPlaces, places } = usePlacesStore();
    return {
        isLoadingPlaces,
        places,
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

<li v-for="place in places" :key="place.id" class="list-group-item list-group-item-action">
    <h5>{{ place.text }}</h5>
    <p>{{ place.place_name }}</p>
    <div align="right">
        <button class="btn btn-outline-primary btn-sm">
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