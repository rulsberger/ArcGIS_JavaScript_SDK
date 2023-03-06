import Home from "@arcgis/core/widgets/Home.js";
import Locate from "@arcgis/core/widgets/Locate.js";
import Search from "@arcgis/core/widgets/Search.js";

export function homeLocateWidget(this_view){
    const homeWidget = new Home({
        view: this_view
    });

    const locateWidget = new Locate({
        view: this_view
    });

    const searchWidget = new Search({
        view: this_view
    });

    this_view.ui.add(searchWidget, { position: "top-left", index: 0 });
    this_view.ui.add([homeWidget, locateWidget], "top-left" );

}

