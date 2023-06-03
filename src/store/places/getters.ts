
import { GetterTree } from 'vuex';
import { IPlacesState } from './state';
import { IStateInterface } from '../index';


const getters: GetterTree<IPlacesState, IStateInterface> = {
    isUserLocationReady( state ) {
        return !!state.userLocation;
    }
}



export default getters;