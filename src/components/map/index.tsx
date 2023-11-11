"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { ChangeView, MapMarker } from "./components";
import { mapProps } from "./types";
import {
  INITIAL_VALUES,
  INITIAL_ZOOM,
  RECEIVER_ICON,
  SENDER_ICON,
} from "./constants";

export function Map({ sender, receiver }: mapProps) {
  return (
    <MapContainer
      center={[INITIAL_VALUES.latitude, INITIAL_VALUES.longitude]}
      zoom={INITIAL_ZOOM}
      style={{ height: "100%", width: "100%" }}
    >
      <ChangeView receiver={receiver} sender={sender} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapMarker location={sender} icon={SENDER_ICON} />
      <MapMarker location={receiver} icon={RECEIVER_ICON} />
    </MapContainer>
  );
}
