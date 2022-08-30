import * as React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import ReactLeafletKml from 'react-leaflet-kml';

function Map(props) {
    const [kml, setKml] = React.useState(null);
    React.useEffect(() => {
        fetch(
        "russian_positions.kml"
        )
        .then((res) => res.text())
        .then((kmlText) => {
            const parser = new DOMParser();
            const kml = parser.parseFromString(kmlText, "text/xml");
            setKml(kml);
        });
    }, []);
    return (
        <MapContainer center={[48.443786, 31.792798]} zoom={6}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {kml && <ReactLeafletKml kml={kml} />}
        </MapContainer>
    )
};

export default Map;