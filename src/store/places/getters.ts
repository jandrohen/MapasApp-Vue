
import { GetterTree } from 'vuex';
import { IPlacesState } from './state';
import { IStateInterface } from '../index';


const getters: GetterTree<IPlacesState, IStateInterface> = {
    someGetter( /* state */ ) {
        // return true;
    }
}



export default getters;