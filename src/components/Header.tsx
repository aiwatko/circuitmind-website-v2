import React, { useState } from 'react';
import styled from 'styled-components';

import Colors from '../materials/colors';
import Spacing from '../materials/spacing';
import Link from './Link';

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
  padding: ${Spacing.m};
  background: rgb(${Colors.darkBlue});
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
  margin: ${Spacing.xs} 0;
  padding: ${Spacing.xs} 0;
  text-decoration: none;
  font-size: 25px;

  @media only screen and (min-width: 600px) {
    padding: 0;
    margin: 0 0 0 ${Spacing.m};
    font-size: 20px;
  }
`;

const Header: React.SFC<Props> = ({ isLogoHidden }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <HeaderEl>
      {
        // Leaving this div here keeps hamburger button always in the right corner
      }
      <LogoWrapper>
        {!isLogoHidden && (
          <Link isInternal to='/'>
            <Logo src='/img/logo.svg' alt='Logo' />
          </Link>
        )}
      </LogoWrapper>
      <HamburgerButton onClick={() => setOpen(!isOpen)}>
        <img src='/img/hamburger.svg' alt='Hamburger menu' />
      </HamburgerButton>
      <Nav isOpen={isOpen}>
        <NavLink isInternal to='/mission'>
          mission
        </NavLink>
        <NavLink isInternal to='/team'>
          team
        </NavLink>
        <NavLink isInternal to='/careers'>
          careers
        </NavLink>
        <NavLink isInternal to='/contact'>
          contact
        </NavLink>
      </Nav>
    </HeaderEl>
  );
};

export default Header;
