<script lang="ts">
import { defineComponent } from 'vue';
import SearchResults from '@/components/search-results/SearchResults.vue';

export default defineComponent({
  name: 'SearchBar',
  components: {
    SearchResults
  },
  setup() {

    return {
    };
  },
});
</script>

<template>
    <div class="searchbar-container">
        <input type="text" class="form-control" placeholder="Search for a place...">
        <SearchResults />
    </div>
</template>

<style scoped>
.searchbar-container {
    position: fixed;
    top: 30px;
    left: 30px;
    background-color: white;
    border-radius: 5px;
    z-index: 9999;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 300px;
    overflow: hidden;
    padding: 5px;
}
</style>