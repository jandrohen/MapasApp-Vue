import { ActionTree } from 'vuex';
import { IPlacesState } from './state';
import { IStateInterface } from '../index';
import { searchApi } from '@/apis';
import { IPlacesResponse } from '@/interfaces/places';


const actions: ActionTree<IPlacesState, IStateInterface> = {
    getInitialLocation( { commit } ) {

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
            (error) => {
                console.log(error);
                throw new Error('Could not get your location')
            }
        )
        
    },
    async searchPlacesByTerm( { commit, state }, query: string ) {

        const resp = await searchApi.get<IPlacesResponse>(`/${ query }.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });

        console.log(resp.data.features);
        
        
    }

}



export default actions;