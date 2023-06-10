<script lang="ts">
import { useMapStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TripDetails',
  setup() {

    const { distance, duration } = useMapStore();
    return {
        distance,
        duration,
    };
  },
});
</script>

<template>
  <div v-if="distance" class="trip-container column">

    <div class="col"> Distance: <strong>{{ distance }} kms</strong> </div>
    <div class="col"> Time: <strong>{{ duration }} hora</strong> </div>
  
  </div>
</template>

<style scoped>
.trip-container {
    background-color: #fff;
    border-radius: 10px;
    bottom: 3.125rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    font-size: 1.5625rem;
    left: 20px;
    padding: 10px;
    position: fixed;
    width: 300px;
}
strong {
    color: #42b983;
}
</style>