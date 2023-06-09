<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchResults',
  setup() {

    return {
    };
  },
});
</script>

<template>

<ul class="list-group mt-3">

<li class="list-group-item list-group-item-action">
    <h5>Site name</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus sunt ab enim qui culpa placeat.</p>
    <div align="right">
        <button class="btn btn-outline-primary btn-sm">
            Adresses
        </button>
    </div>
</li>

<li class="list-group-item list-group-item-action">
    <h5>Site name</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus sunt ab enim qui culpa placeat.</p>
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