import { ActionTree } from 'vuex';
import { IMapState } from './state';
import { IStateInterface } from '../index';
import { directionsApi } from '@/apis';
import { IDirectionsResponse } from '@/interfaces/directions';

export type LngLat = [number, number];

const actions: ActionTree<IMapState, IStateInterface> = {
   async getRouteBetweenPoints( { commit }, { start, end }: { start: LngLat; end: LngLat } ) {
       
        const resp = await directionsApi.get<IDirectionsResponse>(`/${ start.join(',') };${ end.join(',') }`);
        
        commit('setRoutePolyline', resp.data.routes[0].geometry.coordinates);
        
    }
}



export default actions;