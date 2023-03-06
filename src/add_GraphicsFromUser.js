import Circle from "@arcgis/core/geometry/Circle.js";
import Graphic from "@arcgis/core/Graphic.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";


export function add_GraphicsFromUser(the_map, the_view) {
    const graphicsLayer = new GraphicsLayer();
    graphicsLayer.title = 'Clicked Point'
    the_map.add(graphicsLayer)

    the_view.on("click", (pointResult) => {
        // Create the symbol
        const circleSymbol = {
          type: "simple-fill",
          color: [153, 0, 153, 0.2],
          outline: {
            color: [255, 255, 255],
            width: 2
          }
        };

        // construct the geometry
        const userCircle = new Circle({
          type: "polygon",
          center: pointResult.mapPoint,
          numberOfPoints: 180,
          radius: 100,
          radiusUnit: "meters"
        });

        // Marry symbol and geometry to create graphic
        const circleGraphic = new Graphic({
          geometry: userCircle,
          symbol: circleSymbol
        });

        // Add graphic to graphics layer
        graphicsLayer.add(circleGraphic);
        // console.log( "Clicked at Long: " + pointResult.mapPoint.x + ", " + pointResult.mapPoint.y + ".");
      });

      // Program a button to clear the graphics
      document.getElementById("btn-3").addEventListener("click", () => {
        graphicsLayer.removeAll();
      });

      // add button to UI
      the_view.ui.add(document.getElementById("btn-1"), "bottom-right");

}
