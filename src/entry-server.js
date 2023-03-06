export function render() {
  const html = `
<div id="viewDiv"></div>
<div id="mapToolsWidget" class="esri-widget">
</div>
<div id="zoomToBar" class="esri-widget">
  <h3 class="esri-widget" style="text-align:center">Tools</h3>
  <button id="btn-3" class="esri-widget esri-button">Clear User Built Geometry</button>
  <button id="btn-4" class="esri-widget esri-button">Zoom to Palm Springs</button>
  <button id="btn-5" class="esri-widget esri-button">Zoom to Olympia</button>
  <button id="btn-6" class="esri-widget esri-button">Zoom to Esri Redlands</button>
</div>

  `
  return { html }
}
