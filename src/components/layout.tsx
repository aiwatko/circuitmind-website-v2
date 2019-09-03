import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../materials/globalStyle';
import Header from './header';
import Colors from '../materials/colors';

interface Props {
  isLogoHidden?: boolean;
}

const Background = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  color: rgb(${Colors.white});
  background-image: url('images/bg.jpg');
  background-size: cover;
  background-position: center;
  font-size: 20px;
  font-weight: 300;
  overflow-x: hidden;
`;

const Overlay = styled.div`
  background: rgba(${Colors.darkBlue}, 0.85);
  min-height: 100vh;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 760px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout: React.SFC<Props> = ({ children, isLogoHidden }) => (
  <>
    <GlobalStyle />
    <Background>
      <Overlay>
        <Wrapper>
          <Header isLogoHidden={isLogoHidden} />
          {children}
        </Wrapper>
      </Overlay>
    </Background>
  </>
);

export default Layout;
