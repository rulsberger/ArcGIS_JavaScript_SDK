export function basemapsWidget(this_map, this_view){
    document.getElementById( "btn-1" ).addEventListener( "click", () => {
        this_map.basemap = "arcgis-streets"
    });

    document.getElementById( "btn-2" ).addEventListener( "click", () => {
        this_map.basemap = "arcgis-topographic"
    });

    document.getElementById( "btn-3" ).addEventListener( "click", () => {
        this_map.basemap = "arcgis-imagery"
    });

    this_view.ui.add( document.getElementById("basemapBar"), "top-right" );

}
