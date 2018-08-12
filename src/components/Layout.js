import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { browserSupportsDateInput } from '../utilities';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={3}>
            <NavMenu />
          </Col>
          <Col sm={9}>
            <h2>{browserSupportsDateInput() 
            ? 'This browser supports date input fields.' 
            : 'This browser does NOT support date input fields'}</h2>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
