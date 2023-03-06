import Graphic from "@arcgis/core/Graphic.js";

export function add_PalmSpringGraphics(the_view) {
    const pspPoint = {
        type: "point",
        longitude: -116.508075,
        latitude: 33.823154
      };

      const pspSymbol = {
        type: "simple-marker",
        style: "square",
        color: [13, 77, 0, 0.5],
        size: "15px",
        outline: {
          color: [13, 77, 0, 0.3],
          width: "8px"
        }
      };

      let pspAirport = new Graphic({
        geometry: pspPoint,
        symbol: pspSymbol,
        attributes: {
          name: "Palm Springs Airport"
        }
      });

      const hiltonPSPoint = {
        type: "point",
        longitude: -116.5435211196473,
        latitude: 33.82377289842476
      };

      const hiltonPSSymbol = {
        type: "simple-marker",
        style: "diamond",
        color: [25, 25, 255, 0.5],
        size: "15px",
        outline: {
          color: [25, 25, 255, 0.3],
          width: "8px"
        }
      };

      let hiltonPS = new Graphic({
        geometry: hiltonPSPoint,
        symbol: hiltonPSSymbol,
        attributes: {
          name: "Hilton Palm Springs"
        }
      });

      const psccPoint = {
        type: "point",
        longitude: -116.5391252987493,
        latitude: 33.82625263582023
      };

      const psccSymbol = {
        type: "simple-marker",
        style: "circle",
        color: [230, 38, 0, 0.5],
        size: "20px",
        outline: {
          color: [230, 38, 0, 0.3],
          width: "10px"
        }
      };

      let psConventionCenter = new Graphic({
        geometry: psccPoint,
        symbol: psccSymbol,
        attributes: {
          name: "Palm Springs Convention Center"
        }
      });

      const dsTravelLine = {
        type: "polyline",
        paths: [
          [-116.508075, 33.823154],
          [-116.543521, 33.823772],
          [-116.539125, 33.826252]
        ]
      };

      const dsTravelSymbol = {
        type: "simple-line",
        color: [226, 119, 40],
        width: "3px",
        style: "short-dot"
      };

      const dsTravel = new Graphic({
        geometry: dsTravelLine,
        symbol: dsTravelSymbol
      });

      const hlpsPolygon = {
        type: "polygon",
        rings: [
          [-116.555512, 33.850197],
          [-116.492746, 33.850197],
          [-116.492746, 33.801334],
          [-116.555512, 33.801334],
          [-116.555512, 33.850197]
        ]
      };

      const hlpsSymbol = {
        type: "simple-fill",
        color: [153, 0, 153, 0.2],
        outline: {
          color: [255, 255, 255],
          width: 2
        }
      };

      const hlPalmSprings = new Graphic({
        geometry: hlpsPolygon,
        symbol: hlpsSymbol,
        attributes: {
          name: "Palm Springs, CA"
        }
      });

      the_view.graphics.addMany([pspAirport, hiltonPS, psConventionCenter, dsTravel, hlPalmSprings])
}
