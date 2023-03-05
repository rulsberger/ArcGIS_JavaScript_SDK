export function render() {
  const html = `
<div id="viewDiv"></div>
<div id="basemapBar" class="esri-widget">
  <h3 class="esri-widget" style="text-align:center">Basemaps</h3>
  <button id="btn-1" class="esri-widget esri-button">Streets</button>
  <button id="btn-2" class="esri-widget esri-button">Topographic</button>
  <button id="btn-3" class="esri-widget esri-button">Imagery</button>
</div>
<div id="zoomToBar" class="esri-widget">
  <h3 class="esri-widget" style="text-align:center">Zoom To</h3>
  <button id="btn-4" class="esri-widget esri-button">Palm Springs</button>
  <button id="btn-5" class="esri-widget esri-button">Olympia</button>
  <button id="btn-6" class="esri-widget esri-button">Esri Redlands</button>
</div>

  `
  return { html }
}
