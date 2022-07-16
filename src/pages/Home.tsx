import React from 'react';
import "leaflet/dist/leaflet.css"

import { FrontVar } from '../components/FrontBar';
import { Container, Row } from 'react-bootstrap';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLng } from "leaflet";
import { SearchForm } from '../components/SearchForm';

export default class Home extends React.Component<{}, {paramAddress1: string, paramAddress2: string}> {
  constructor(props: any){
    super(props);
    this.state = {
      paramAddress1: '',
      paramAddress2: ''
    }
  };



  render() {
    const position = new LatLng(35.684361712950285, 139.7535865201787);

    const onSearch = () => {
    
    };


    return (
        <Container>
          <Row>
            <FrontVar />
          </Row>
          <Row>
            <SearchForm 
              paramAddress1={this.state.paramAddress1}
              paramAddress2={this.state.paramAddress2}
              onClick={onSearch}
            />
          </Row>
          <Row>
          <MapContainer center={position} zoom={13} style={{height: "75vh" }}>
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