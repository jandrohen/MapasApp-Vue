import { Module } from 'vuex';
import { IStateInterface } from '../index';

import state, { IMapState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const mapModule: Module<IMapState, IStateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default mapModule;