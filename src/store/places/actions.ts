import { ActionTree } from 'vuex';
import { IPlacesState } from './state';
import { IStateInterface } from '../index';


const actions: ActionTree<IPlacesState, IStateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;