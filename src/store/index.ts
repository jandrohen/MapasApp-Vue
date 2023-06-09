import { createStore } from 'vuex';

// places modules here
import placesModule from './places';
import { IPlacesState } from './places/state';

// map modules here
import mapModule from './map';
import { IMapState } from './map/state';


export interface IStateInterface {
  places: IPlacesState
  map: IMapState
}

export default createStore<IStateInterface>({
  modules: {
    places: placesModule,
    map: mapModule
  }
})
