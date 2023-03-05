import './style.css'
import { coordinate_widget } from './coordinate_widget';
import { buttons_widget } from './buttons_widget';

import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import TileLayer from "@arcgis/core/layers/TileLayer.js";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer.js";

esriConfig.apiKey = "AAPK4ff2dc8d743240af819665527f73a7a2NT8tGg68ND_SxUUhSZfMAdGfK0M0ZcII7yTUJRpwvFUlJrKmp-I3LTu11Y1eYeP6";

  // Create layers
//   const worldHillshade = new TileLayer({
//     url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"
// })
const topoLayer = new VectorTileLayer({
    url: "https://basemaps-api.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer",
opacity: 0.25
})

const quakesLayer = new FeatureLayer({
url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/USGS_Seismic_Data_v1/FeatureServer/0",
labelsVisible: false,
popupTemplate: {
  title: "Reported Event: {eventTime}",
  content:
    "A magnitude {mag} {eventType} occurred {place} ({longitude} Long, {latitude} Lat) at a depth of {depth} kilometers.",
  fieldInfos: [
    {
      fieldName: "mag",
      format: {
        places: 1
      }
    },
    {
      fieldName: "longitude",
      format: {
        places: 3
      }
    },
    {
      fieldName: "latitude",
      format: {
        places: 3
      }
    },
    {
      fieldName: "depth",
      format: {
        digitSeparator: true,
        places: 1
      }
    }
  ]
}
});

const shakeLayer = new FeatureLayer({
url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/USGS_Seismic_Data_v1/FeatureServer/1"
});

const plateBoundariesLayer = new FeatureLayer({
portalItem: {
  id: "3321edc7dcfb47df805abb3be6ac916a"
}
});

const theMap = new Map({
    basemap : "arcgis-streets",
    layers : [quakesLayer, shakeLayer, plateBoundariesLayer]
});

const theView = new MapView({
  container : "viewDiv",
  map: theMap,
  center: [-116.5453, 33.8303],
  zoom: 15
});

buttons_widget(theMap, theView);
coordinate_widget(theView);

console.log( "Number of layers: " + theMap.layers.length );

theMap.layers.forEach( (item, i) => {
console.log("Layer title: " + item.title + ", Layer type: " + item.type);
});

console.log( "---Dropping the earthquakes layer!" );
theMap.remove( quakesLayer );
console.log( "---Number of layers: " + theMap.layers.length );

console.log( "+++Adding the earthquakes layer!" );
theMap.add( quakesLayer );
console.log( "+++Number of layers: " + theMap.layers.length );

