import React from 'react';

import { FrontVar } from '../components/FrontBar';
import { Container, Row, Table } from 'react-bootstrap';

export default class Links extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <FrontVar />
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><a href="https://hirm159.hatenablog.jp/" target="_blank" rel="noopener noreferrer">Auther</a></td>
                <td>作者HP</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    )
  }
}