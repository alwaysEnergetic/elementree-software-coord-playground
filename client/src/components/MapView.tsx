 
import * as React from 'react';
import Map , { Source, Layer } from 'react-map-gl';
import {MAPBOX_TOKEN,LAYERSTYLE} from '../config/map'

const MapView = (props:any)=> {    
        return(
            <div>
            <Map
            mapboxAccessToken={MAPBOX_TOKEN}
            renderWorldCopies={false} 
            style={{width: '100%', height: 650}}
            mapStyle="mapbox://styles/mapbox/streets-v9">  
             <Source id="my-data" type="geojson" data={JSON.parse(props.getCoords)}>
                <Layer {...LAYERSTYLE} />
            </Source>
            </Map>  
            </div>             
        )
    }
export default MapView;