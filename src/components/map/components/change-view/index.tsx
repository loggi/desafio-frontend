import { useMap } from "react-leaflet";
import { latLngBounds } from "leaflet";
import { mapProps } from "../../types";

export function ChangeView({ sender, receiver }: mapProps) {
  if (!sender || !receiver) return null;

  const map = useMap();
  let markerBounds = latLngBounds([]);

  const markers = [sender, receiver];

  if (markers.length && markers.length > 0) {
    markers.forEach((marker) => {
      markerBounds.extend([marker.latitude, marker.longitude]);
    });

    markerBounds.isValid() && map.fitBounds(markerBounds);
  }

  return null;
}
