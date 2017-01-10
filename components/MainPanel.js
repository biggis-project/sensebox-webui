export let __hotReload = true;

import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import CurrentLocationInfo from 'components/CurrentLocationInfo';

export default class MainPanel extends React.Component {
  render() {
    return (
      <Navbar color="faded" light>

        {/* company logo and link to the main page */}
        <NavbarBrand href="/">
          Sensebox Station
        </NavbarBrand>

        {/* all controls in the panel */}
        <Nav navbar>
          <NavLink href="http://biggis-project.eu">BigGIS</NavLink>
          <NavLink>
            <CurrentLocationInfo/>
          </NavLink>
        </Nav>
      </Navbar>
    )
  }
}