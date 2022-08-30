import * as React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import ReactLeafletKml from 'react-leaflet-kml';
import massGraveRed from '../assets/Mass-Grave-Marker-Red.png';

function GetMarkerIcon(_iconSize) {
    return new L.Icon({
        iconUrl: massGraveRed,
        iconSize: [31, 45],
        iconAnchor: [15, 45]
    });
};

function Map(props) {
    const [kml, setKml] = React.useState(null);
    React.useEffect(() => {
        fetch(
        "Ukraine.kml"
        )
        .then((res) => res.text())
        .then((kmlText) => {
            const parser = new DOMParser();
            const kml = parser.parseFromString(kmlText, "text/xml");
            setKml(kml);
        });
    }, []);
    return (
        <MapContainer center={[23.4, -102.5]} zoom={6}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {kml && <ReactLeafletKml kml={kml} />}
            <Marker 
            position={ [ 31.165863, -110.959835 ] }
            icon = { GetMarkerIcon() }
            ></Marker>
        </MapContainer>
    )
};

export default Map;