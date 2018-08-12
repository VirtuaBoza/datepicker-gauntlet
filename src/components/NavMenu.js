import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>DatePicker Gauntlet</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/date-input'} exact>
              <NavItem>
                Plain Date Input
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/nodep-date-input-polyfill'} exact>
              <NavItem>
                nodep-date-input-polyfill
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/date-input-polyfill'}>
              <NavItem>
                date-input-polyfill
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/better-dateinput-polyfill'}>
              <NavItem>
                better-dateinput-polyfill
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/react-datepicker'}>
              <NavItem>
                react-datepicker
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/react-date-picker'}>
              <NavItem>
                react-date-picker
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/react-date-picker-nostyle'}>
              <NavItem>
                react-date-picker (No Style)
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/react-dates'}>
              <NavItem>
                react-dates
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/react-day-picker'}>
              <NavItem>
                react-day-picker
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/jquery-ui-datepicker'}>
              <NavItem>
                jQuery UI Datepicker
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/winner'}>
              <NavItem>
                Winner
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
