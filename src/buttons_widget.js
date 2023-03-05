export function buttons_widget(this_map, this_view){
    document.getElementById( "btn-1" ).addEventListener( "click", () => {
        this_map.basemap = "arcgis-streets"
    });

    document.getElementById( "btn-2" ).addEventListener( "click", () => {
        this_map.basemap = "arcgis-topographic"
    });

    document.getElementById( "btn-3" ).addEventListener( "click", () => {
        this_map.basemap = "arcgis-imagery"
    });

    document.getElementById( "btn-4" ).addEventListener( "click", () => {
    this_view.goTo({
        center: [-116.5453, 33.8303], // Palm Springs 33.8303° N, 116.5453° W
        zoom: 15
    })
    });

    document.getElementById( "btn-5" ).addEventListener( "click", () => {
    this_view.goTo({
        center: [-122.9017, 47.0500], // 47.0500° N, 122.9017° W Esri Olympia
        zoom: 14
    })
    });

    document.getElementById( "btn-6" ).addEventListener( "click", () => {
    this_view.goTo({
        center: [-117.1960, 34.0573], // 34.0573° N, 117.1949° W Esri Redlands
        zoom: 18
    })
    });

    // Add button bar to UI
    this_view.ui.add( document.getElementById("buttonBar"), "top-right" );
}
