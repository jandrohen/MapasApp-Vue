import { MutationTree } from 'vuex';
import { IPlacesState } from './state';


const mutation: MutationTree<IPlacesState> = {
    setLngLat( state: IPlacesState, { lng, lat }: { lng: number, lat: number} ) {        
        state.userLocation = [lng, lat];
        state.isLoading = false;
    }
}


export default mutation;