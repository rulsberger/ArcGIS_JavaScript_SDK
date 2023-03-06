import BasemapGallery from "@arcgis/core/widgets/BasemapGallery.js";
import LayerList from "@arcgis/core/widgets/LayerList.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import Expand from "@arcgis/core/widgets/Expand.js";

export function mapToolsWidget(this_view){
    // Create the HTML div element programmatically at runtime and set to the widget's container
    const basemapGallery = new BasemapGallery({
        view: this_view,
        container: "basemapWidget"
    });

    const basemapGalleryExpand = new Expand({
        expandIconClass: "esri-icon-basemap",
        view: this_view,
        content: basemapGallery
    });

    const layerListWidget = new LayerList({
        view: this_view
      });

    const layerListExpand = new Expand({
        expandIconClass: "esri-icon-layers",
        view: this_view,
        content: layerListWidget
      });

    const legendWidget = new Legend({
        view: this_view,
        basemapLegendVisible: true
    });

    const legendExpand = new Expand({
        expandIconClass: "esri-icon-legend",
        view: this_view,
        content: legendWidget
    });

    this_view.ui.add([basemapGalleryExpand, layerListExpand, legendExpand], "top-right" );
}
