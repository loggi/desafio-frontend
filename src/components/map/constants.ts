import { Icon } from "leaflet";

export const INITIAL_ZOOM = 17;

export const INITIAL_VALUES = {
  latitude: -23.5657393,
  longitude: -46.6538128,
};

export const SENDER_ICON = new Icon({
  iconUrl: "/sender-icon.png",
  iconSize: [65, 65],
});

export const RECEIVER_ICON = new Icon({
  iconUrl: "/receiver-icon.png",
  iconSize: [65, 65],
});
