import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../materials/globalStyle';
import Header from './header';

const Body = styled.body`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-image: url('images/bg.jpg');
  background-size: cover;
  background-position: center;
  font-size: 20px;
  font-weight: 300;
  overflow-x: hidden;
`;

const Overlay = styled.div`
  background: rgba(5, 29, 53, 0.85);
  min-height: 100vh;
  color: white;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout: React.SFC = ({ children }) => (
  <>
    <GlobalStyle />
    <Body>
      <Overlay>
        <Wrapper>
          <Header />
          <main>{children}</main>
        </Wrapper>
      </Overlay>
    </Body>
  </>
);

export default Layout;
