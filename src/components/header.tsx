import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  isLogoHidden?: boolean;
}
interface NavProps {
  isOpen: boolean;
}

const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
`;

const HamburgerButton = styled.button`
  width: 50px;
  height: auto;
  padding: 0;
  border: none;
  background: transparent;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const Nav = styled.nav<NavProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgb(5, 29, 53);
  z-index: 3;
  transition: transform 0.5s ease-in-out;
  ${({ isOpen }) => (isOpen ? 'transform: translateX(0);' : 'transform: translateX(100%);')};

  @media only screen and (min-width: 600px) {
    position: relative;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0;
    background: transparent;
    transform: translateX(0);
  }
`;

const NavLink = styled(Link)`
  margin: 10px 0;
  padding: 10px 0;
  text-decoration: none;
  font-size: 25px;
  color: white;

  &:visited,
  &:hover {
    color: white;
  }

  @media only screen and (min-width: 600px) {
    padding: 0;
    margin: 0 0 0 20px;
    font-size: 20px;
  }
`;

const Header: React.SFC<Props> = ({ isLogoHidden }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <HeaderEl>
      {!isLogoHidden && (
        <LogoWrapper>
          <Link to='/'>
            <Logo src='images/logo.svg' alt='Logo' />
          </Link>
        </LogoWrapper>
      )}
      <HamburgerButton onClick={() => setOpen(!isOpen)}>
        <img src='images/hamburger.svg' alt='Hamburger menu' />
      </HamburgerButton>
      <Nav isOpen={isOpen}>
        <NavLink to='mission.html'>mission</NavLink>
        <NavLink to='team.html'>team</NavLink>
        <NavLink to='careers.html'>careers</NavLink>
        <NavLink to='contact.html'>contact</NavLink>
      </Nav>
    </HeaderEl>
  );
};

export default Header;
