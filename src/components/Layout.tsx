import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../materials/globalStyle';
import Header from './Header';
import Colors from '../materials/colors';
import Spacing from '../materials/spacing';

interface Props {
  isLogoHidden?: boolean;
}

const Background = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  color: rgb(${Colors.white});
  background-image: url('/img/bg.jpg');
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
  padding: 0 ${Spacing.m} ${Spacing.m} ${Spacing.m};
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
