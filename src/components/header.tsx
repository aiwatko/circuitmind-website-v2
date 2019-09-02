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

interface Props {
  siteTitle: string;
}

const Header: React.SFC<Props> = ({ siteTitle }) => (
  <HeaderEl>
    <Nav>
      <NavLink to="/">{siteTitle}</NavLink>
    </Nav>
  </HeaderEl>
);

export default Header;
