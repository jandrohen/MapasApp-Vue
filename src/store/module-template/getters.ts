
import { GetterTree } from 'vuex';
import { IExampleStateInterface } from './state';
import { IStateInterface } from '../index';


const getters: GetterTree<IExampleStateInterface, IStateInterface> = {
    someGetter( /* state */ ) {
        // return true;
    }
}



export default getters;