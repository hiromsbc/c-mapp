import { useState } from 'react';
import "leaflet/dist/leaflet.css"

import { FrontVar } from '../components/FrontBar';
import { Container, Row } from 'react-bootstrap';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLng } from "leaflet";
import { SearchForm } from '../components/SearchForm';
import axios from 'axios';

export const Home = () => {

  const position = new LatLng(35.684361712950285, 139.7535865201787);

  const path = "https://msearch.gsi.go.jp/address-search/AddressSearch?q=";

  const [paramAddress1, setParamAddress1] = useState("");

  const [point1, setPoint1] = useState<[]>();

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
      setPoint1(res.data[0].geometry.coordinates);
      console.log(point1);
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
        <MapContainer center={position} zoom={13} style={mapStyle}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
        </Row>
    </Container>
  )
};