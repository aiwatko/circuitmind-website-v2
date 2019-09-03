import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../materials/globalStyle';
import Header from './header';

interface Props {
  isLogoHidden?: boolean;
}

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

const Main = styled.main`
  display: flex;
  min-height: 80vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const Layout: React.SFC<Props> = ({ children, isLogoHidden }) => (
  <>
    <GlobalStyle />
    <Body>
      <Overlay>
        <Wrapper>
          <Header isLogoHidden={isLogoHidden} />
          <Main>{children}</Main>
        </Wrapper>
      </Overlay>
    </Body>
  </>
);

export default Layout;
