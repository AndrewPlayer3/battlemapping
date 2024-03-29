import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, useMap, GeoJSON } from 'react-leaflet'
import ReactLeafletKml from 'react-leaflet-kml';
import Ukraine from './Ukraine.js'

export function ChangeView({ coords }) {
    const map = useMap()
    map.setView(coords, 12)
    return null
}

  

export default function Map({kml}) {
    
    const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 })

    const center = [geoData.lat, geoData.lng]

    return (
        <MapContainer center={center} zoom={12} style={{ height: '100vh' }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {geoData.lat && geoData.lng && (
                <Marker position={[geoData.lat, geoData.lng]} />
            )}

            <GeoJSON data={Ukraine.features }/>
            {
                console.log(kml)
            }
            <ChangeView coords={center} />
        </MapContainer>
    )
}
