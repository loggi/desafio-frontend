'use client'

import { useEffect, useMemo, useState } from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'

export default function MapOld() {
  const center = useMemo(() => ({ lat: 40, lng: -80 }), [])
  const [newComponent, setNewComponent] = useState({})
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! })

  useEffect(() => {
    function newMap() {
      try {
        setNewComponent(() => <GoogleMap center={ center } mapContainerClassName="map-container" zoom={ 10 }><Marker position={ center } /></GoogleMap>)
      } catch (e) {
        setNewComponent(() => <></>)
      }
    }

    newMap()
  }, []);

  return (
    <>
      { (isLoaded)
        ? newComponent
        : <></>
      }
    </>
  )
}
