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
        // Clear previous polilyne
        if ( state.map?.getLayer( 'RouteString' ) ) {
            state.map?.removeLayer( 'RouteString' );
            state.map?.removeSource( 'RouteString' );
            state.distance = undefined;
            state.duration = undefined;
        }
    
    },
    setRoutePolyline( state, coords: number[][] ) {

        const start = coords[0];
        const end = coords[ coords.length - 1 ];

        // Bounds Definition
        const bounds = new Mapboxgl.LngLatBounds(
            [ start[0], start[1] ],
            [ start[0], start[1] ]
        );

        // Add each point to the bounds
        for ( const coord of coords ) {
            const newCoord: [number, number] = [ coord[0], coord[1] ];
            bounds.extend( newCoord );
        }

        state.map?.fitBounds( bounds, {
            padding: 200
        });

        // Polyline
        const sourcerData: Mapboxgl.AnySourceData = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: coords
                    }
                }]
            }
        };

        if ( state.map?.getSource( 'RouteString' ) ) {
            state.map?.removeLayer( 'RouteString' );
            state.map?.removeSource( 'RouteString' );
        }

        state.map?.addSource( 'RouteString', sourcerData );

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': '#ff0000',
                'line-width': 3
            }
        });
    
    }
}


export default mutation;