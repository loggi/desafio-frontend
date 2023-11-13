'use client'

import React, { useEffect } from 'react'
import { MapContainer, Marker, Polyline, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

import { Coordinates } from '@/types/tracking-order'

export type MapProps = {
  deliveryPersonCoordinates: Coordinates
  deliveryAddressCoordinates: Coordinates
}

type MapEventsProps = Omit<MapProps, 'deliveryAddressCoordinates'>

function MapEvents({ deliveryPersonCoordinates }: MapEventsProps) {
  const map = useMap()

  useEffect(() => {
    map.flyTo([deliveryPersonCoordinates.latitude, deliveryPersonCoordinates.longitude], 15, {
      duration: 2
    })
  }, [deliveryPersonCoordinates, map])

  return null
}

export default function Map({ deliveryPersonCoordinates, deliveryAddressCoordinates }: MapProps) {
  return (
    <MapContainer
      center={[deliveryPersonCoordinates.latitude, deliveryPersonCoordinates.longitude]}
      zoom={13}
      zoomControl={false}
      doubleClickZoom={false}
      scrollWheelZoom={false}
      className='w-full h-screen'
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapEvents deliveryPersonCoordinates={deliveryPersonCoordinates} />
      <Marker position={[deliveryPersonCoordinates.latitude, deliveryPersonCoordinates.longitude]} />

      <Marker position={[deliveryAddressCoordinates.latitude, deliveryAddressCoordinates.longitude]} />

      <Polyline
        positions={[
          [deliveryPersonCoordinates.latitude, deliveryPersonCoordinates.longitude],
          [deliveryAddressCoordinates.latitude, deliveryAddressCoordinates.longitude]
        ]}
      />
    </MapContainer>
  )
}
