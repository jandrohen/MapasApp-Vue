import { defineComponent, onMounted, ref } from "vue";

import { usePlacesStore } from "@/composables";

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElememt = ref<HTMLDivElement>();
        const {  isUserLocationReady} = usePlacesStore();
        
        onMounted(() => {
            console.log(mapElememt.value);
        });
            

        return {
            mapElememt,
            isUserLocationReady
            
        }
    }
});