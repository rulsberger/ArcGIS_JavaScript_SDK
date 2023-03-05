export function coordinate_widget(this_view) {
    let coordsWidget = document.createElement("div");
    coordsWidget.id = "coordsWidget";
    coordsWidget.className = "esri-widget esri-component";
    coordsWidget.style.padding = "7px 15px 5px";

    this_view.ui.add(coordsWidget, "bottom-left");

    function showCoordinates(pt) {
    let coords =
        "Lat/Long: " +
        pt.latitude.toFixed(2) +
        ", " +
        pt.longitude.toFixed(2) +
        " | Scale 1:" +
        Math.round(this_view.scale * 1) / 1 +
        " | Zoom " +
        this_view.zoom +
        " | " + this_view.get("map.basemap.title");

    coordsWidget.innerHTML = coords;
    }

    this_view.watch("stationary", function (isStationary) {
    showCoordinates(this_view.center);
    });

    this_view.on("pointer-move", function (evt) {
    showCoordinates(this_view.toMap({ x: evt.x, y: evt.y }));
    });
};
