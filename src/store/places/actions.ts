import { ActionTree } from 'vuex';
import { IPlacesState } from './state';
import { IStateInterface } from '../index';
import { searchApi } from '@/apis';
import { Feature, IPlacesResponse } from '@/interfaces/places';


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
    async searchPlacesByTerm( { commit, state }, query: string ): Promise<Feature[]> {

       if (query.length === 0){
              commit('setPlaces', []);
              return [];
       }

       if ( !state.userLocation ) {
              throw new Error('User location not set');
         }

        commit('setIsLoadingPlace');

        const resp = await searchApi.get<IPlacesResponse>(`/${ query }.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });
        
        commit('setPlaces', resp.data.features);
        return resp.data.features;
    }

}



export default actions;