import { MutationTree } from 'vuex';
import { IMapState } from './state';
import Mapboxgl from 'mapbox-gl';
import { Feature } from '@/interfaces/places';

const mutation: MutationTree<IMapState> = {
    setMap( state, map: Mapboxgl.Map ) {
        state.map = map;
    },
    setPlaceMarkers( state, places: Feature[] ) {
            
        // Remove previous markers
        state.markers?.forEach( marker => marker.remove() );
        state.markers = [];

        if ( !state.map ) return;

        // Add new markers
        for ( const place of places ) {

            const [ lng, lat ] = place.center;

            const popup = new Mapboxgl.Popup()
                .setLngLat( [ lng, lat ] )
                .setHTML( `
                    <h3>${ place.text }</h3>
                    <p>${ place.place_name }</p>
                ` );

            const marker = new Mapboxgl.Marker()
                .setLngLat( [ lng, lat ] )
                .setPopup( popup )
                .addTo( state.map! );    
        
            state.markers.push( marker );
            }
    
    }
}


export default mutation;