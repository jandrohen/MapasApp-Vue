import { ActionTree } from 'vuex';
import { IMapState } from './state';
import { IStateInterface } from '../index';


const actions: ActionTree<IMapState, IStateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;