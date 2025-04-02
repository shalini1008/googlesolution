import * as L from "leaflet";

declare module "leaflet" {
  export function heatLayer(
    latlngs: L.LatLngExpression[],
    options?: {
      radius?: number;
      blur?: number;
      maxZoom?: number;
      max?: number;
      minOpacity?: number;
      gradient?: { [key: number]: string };
    }
  ): L.Layer;
}
