import React from 'react';
import { Link } from "react-router-dom";

import { FrontVar } from '../components/FrontBar';
import { Container } from 'react-bootstrap';

export default class NotFound extends React.Component {
  render() {
    return (
        <Container>
            <FrontVar />
            <h1>Not Found</h1>
            <div>
                そのページは存在しません。
            </div>
      </Container>
    )
  }
};
