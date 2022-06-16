import React from 'react';
import "leaflet/dist/leaflet.css"

import { FrontVar } from '../components/FrontBar';
import { Container, Row } from 'react-bootstrap';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLng } from "leaflet";

export default class Home extends React.Component {
  render() {
    const position = new LatLng(51.505, -0.09);

    return (
        <Container>
          <Row>
            <FrontVar />
          </Row>
          <Row>
          <MapContainer center={position} zoom={13} style={{height: 400}}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
          </Row>
      </Container>
    )
  }
};