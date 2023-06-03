import { createStore } from 'vuex';

// My custom modules
import placesModule from './places';
import { IPlacesState } from './places/state';


export interface IStateInterface {
  places: IPlacesState
}

export default createStore<IStateInterface>({
  modules: {
    places: placesModule
  }
})
