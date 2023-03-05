import './style.css'
import { coordinate_widget } from './coordinate_widget';
import { buttons_widget } from './buttons_widget';

import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

esriConfig.apiKey = "AAPK4ff2dc8d743240af819665527f73a7a2NT8tGg68ND_SxUUhSZfMAdGfK0M0ZcII7yTUJRpwvFUlJrKmp-I3LTu11Y1eYeP6";

const theMap = new Map({
  basemap : "arcgis-topographic"
});

const theView = new MapView({
  container : "viewDiv",
  map: theMap,
  center: [-116.5453, 33.8303],
  zoom: 15
});

buttons_widget(theMap, theView);
coordinate_widget(theView);
