import { ActionTree } from 'vuex';
import { IPlacesState } from './state';
import { IStateInterface } from '../index';


const actions: ActionTree<IPlacesState, IStateInterface> = {
    getInitialLocation( { commit } ) {

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
            (error) => {
                console.log(error);
                throw new Error('Could not get your location')
            }
        )
        
    }
}



export default actions;