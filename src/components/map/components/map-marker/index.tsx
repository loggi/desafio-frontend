"use client";

import { Marker } from "react-leaflet";
import { markerProps } from "./types";

export function MapMarker({ location, icon }: markerProps) {
  if (!location) return null;

  return (
    <Marker position={[location.latitude, location.longitude]} icon={icon} />
  );
}
