import { MutationTree } from 'vuex';
import { IMapState } from './state';
import Mapboxgl from 'mapbox-gl';

const mutation: MutationTree<IMapState> = {
    setMap( state, map: Mapboxgl.Map ) {
        state.map = map;
    }
}


export default mutation;