import { useState } from 'react';
import "leaflet/dist/leaflet.css"
import icon from 'leaflet/dist/images/marker-icon.png';

import { FrontVar } from '../components/FrontBar';
import { Container, Row } from 'react-bootstrap';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import L from "leaflet";
import { SearchForm } from '../components/SearchForm';
import axios from 'axios';

const marker = L.icon({
  iconUrl: icon,
});

function ChangeView({ center }: { center: any}) {
  const map = useMap();
  map.setView(center);
  return null;
}

export const Home = () => {

  const path = "https://msearch.gsi.go.jp/address-search/AddressSearch?q=";

  const [paramAddress1, setParamAddress1] = useState("");

  const [resultLat, setResultLat] = useState(35.684361712950285);

  const [resultLng, SetResultLng] = useState(139.7535865201787);

  const changeParamAddress1 = (event: any) =>  {
    setParamAddress1(event.target.value);
  };

  const clearParam = () => {
    setParamAddress1("");
  };

  const searchParam = () => {
    if (paramAddress1.length === 0) {
      return null;
    }

    axios.get(path + paramAddress1).then((res) => {
      setResultLat(res.data[0].geometry.coordinates[1]);
      SetResultLng(res.data[0].geometry.coordinates[0]);
      console.log(res.data[0].geometry.coordinates[1], res.data[0].geometry.coordinates[0]);
    });

  }


  const mapStyle= {
    height: "75vh"
  };

  return (
      <Container>
        <Row>
          <FrontVar />
        </Row>
        <Row>
          <SearchForm 
            paramAddress1={paramAddress1}
            changeParamAddress1={changeParamAddress1}
            clear={clearParam}
            search={searchParam}
          />
        </Row>
        <Row>
        <MapContainer
          id={"map"}
          center={[resultLat, resultLng]}
          zoom={13}
          style={mapStyle}
        >
          <ChangeView center={[resultLat, resultLng]}/>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[resultLat, resultLng]}
            icon={marker}
          />
        </MapContainer>
        </Row>
    </Container>
  )
};