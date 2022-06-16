import React from 'react';
import { Link } from "react-router-dom";

import { FrontVar } from '../components/FrontBar';
import { Container } from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return (
        <Container>
          <FrontVar />
      </Container>
    )
  }
};
