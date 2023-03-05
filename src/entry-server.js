export function render() {
  const html = `
<div id="viewDiv"></div>
<div id="buttonBar" class="esri-widget">
  <button id="btn-1" class="esri-widget esri-button">Streets</button>
  <button id="btn-2" class="esri-widget esri-button">Topographic</button>
  <button id="btn-3" class="esri-widget esri-button">Imagery</button>
  <button id="btn-4" class="esri-widget esri-button">Palm Springs</button>
  <button id="btn-5" class="esri-widget esri-button">Olympia</button>
  <button id="btn-6" class="esri-widget esri-button">Esri Redlands</button>
</div>
  `
  return { html }
}
