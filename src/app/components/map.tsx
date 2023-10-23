'use client'

import { useMemo } from 'react'
import { GoogleMap, Marker, useLoadScript,  } from '@react-google-maps/api'

export default function Map() {
  const center = useMemo(() => ({ lat: 40, lng: -80 }), [])
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! });

  return (
    <>
      { isLoaded
        ? <GoogleMap center={ center } mapContainerClassName="map-container" zoom={ 10 }><Marker position={ center } /></GoogleMap>
        : <div>Loading</div>
      }
    </>
  )
}
