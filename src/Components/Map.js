import * as React from "react";
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import ReactLeafletKml from 'react-leaflet-kml';

function Map(props) {
    const [positionsKml, setPositionsKml] = React.useState(null);
    const [trenchesKml,  setTrenchesKml]  = React.useState(null);
    React.useEffect(() => {
        fetch(
        "russian_positions.kml"
        )
        .then((res) => res.text())
        .then((kmlText) => {
            const parser = new DOMParser();
            const positionsKml = parser.parseFromString(kmlText, "text/xml");
            setPositionsKml(positionsKml);
        });
        fetch(
            "ukraine_trenches.kml"
            )
            .then((res) => res.text())
            .then((kmlText) => {
                const parser = new DOMParser();
                const trenchesKml = parser.parseFromString(kmlText, "text/xml");
                setTrenchesKml(trenchesKml);
        });
    }, []);
    return (
        <MapContainer center={[48.443786, 31.792798]} zoom={6}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />  
                <LayersControl position="topright">
                    <LayersControl.Overlay checked  name="Positions">
                        {positionsKml && <ReactLeafletKml kml={positionsKml} />}
                    </LayersControl.Overlay>
                    <LayersControl.Overlay checked name="Trenches">
                        {trenchesKml && <ReactLeafletKml kml={trenchesKml} />}
                    </LayersControl.Overlay>
                </LayersControl>
        </MapContainer>
    )
};

export default Map;