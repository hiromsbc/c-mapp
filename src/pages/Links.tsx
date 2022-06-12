import React from 'react';
import { Link } from "react-router-dom";

import { FrontVar } from '../components/FrontBar';
import { Container } from 'react-bootstrap';

export default class Links extends React.Component {
  render() {
    return (
      <Container>
        <FrontVar />
        <h1>リンク集</h1>
      </Container>
    )
  }
}
  