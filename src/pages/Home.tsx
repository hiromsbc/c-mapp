import React from 'react';

import { FrontVar } from '../components/FrontBar';
import { Container, Row } from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return (
        <Container>
          <Row>
            <FrontVar />
          </Row>
          <Row>
          </Row>
      </Container>
    )
  }
};
