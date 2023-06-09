
import { GetterTree } from 'vuex';
import { IMapState } from './state';
import { IStateInterface } from '../index';


const getters: GetterTree<IMapState, IStateInterface> = {
    isMapReady( state ) {
        return !!state.map;
    }
}



export default getters;