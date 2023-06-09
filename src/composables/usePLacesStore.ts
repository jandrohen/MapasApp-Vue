import { IStateInterface } from "@/store/index";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export const usePlacesStore = () => {

    const store = useStore<IStateInterface>();

    onMounted(() => {
        if (!store.getters['places/isUserLocationReady']) {
            store.dispatch('places/getInitialLocation');
        }
    });

    return {
        // State
        isLoading: computed(() => store.state.places.isLoading),
        userLocation: computed(() => store.state.places.userLocation),

        // Getters
        isUserLocationReady: computed<boolean>(() => store.getters['places/isUserLocationReady']),

        // Mutations

        // Actions
        searchPlacesByTerm: (query = '') => store.dispatch('places/searchPlacesByTerm', query)
    }
}