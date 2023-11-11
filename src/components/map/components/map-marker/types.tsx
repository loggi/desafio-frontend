import { Icon } from "leaflet";

export type markerProps = {
  location: { latitude: number; longitude: number };
  icon: Icon;
};
