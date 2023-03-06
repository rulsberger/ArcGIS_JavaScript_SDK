import Sketch from "@arcgis/core/widgets/Sketch.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Expand from "@arcgis/core/widgets/Expand.js";

export function add_Sketch(the_map, the_view) {
    const graphicsLayer = new GraphicsLayer();
    graphicsLayer.title = "Sketched Layers"

    the_map.add(graphicsLayer)

    the_view.when(() => {
        const sketch = new Sketch({
          view: the_view,
          layer: graphicsLayer,
          creationMode: "continuous"
        });

        const sketchExpand = new Expand({
            expandIconClass: "esri-icon-edit",
            view: the_view,
            content: sketch
        });


        the_view.ui.add(sketchExpand, { position: "top-right", index: 0 });
      });
}
