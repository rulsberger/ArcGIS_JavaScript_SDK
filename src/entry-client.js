import './style.css'

import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

esriConfig.apiKey = "AAPK4ff2dc8d743240af819665527f73a7a2NT8tGg68ND_SxUUhSZfMAdGfK0M0ZcII7yTUJRpwvFUlJrKmp-I3LTu11Y1eYeP6";

const map = new Map({
  basemap : "arcgis-topographic"
});

const view = new MapView({
  container : "viewDiv",
  map: map,
  center: [-118.805, 34.027],
  zoom: 13
});


