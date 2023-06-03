import { Module } from 'vuex';
import { IStateInterface } from '../index';

import state, { IPlacesState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const exampleModule: Module<IPlacesState, IStateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default exampleModule;