<script lang="ts">
import { computed, defineComponent } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables';

export default defineComponent({
  name: 'MyLocationBtn',
  setup() {

    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { map, isMapReady } = useMapStore();
    return {
        isBtnReady: computed(() => isUserLocationReady.value && isMapReady.value),
        onMyLocationClicked: () => {
            map.value?.flyTo({
                center: userLocation.value,
                zoom: 15,
            });
        }
    };
  },
});
</script>

<template>
    <button v-if="isBtnReady"
            class="btn btn-primary"
            @click="onMyLocationClicked">
            Go to my location
    </button>
</template>

<style scoped>
button {
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>