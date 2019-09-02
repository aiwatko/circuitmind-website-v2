import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const HeaderEl = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Nav = styled.nav`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const NavLink = styled(GatsbyLink)`
  color: white;
  text-decoration: none;
`;

const Header: React.SFC = () => (
  <HeaderEl>
    <Nav>
      <NavLink to="/">logo placeholder</NavLink>
    </Nav>
  </HeaderEl>
);

export default Header;
