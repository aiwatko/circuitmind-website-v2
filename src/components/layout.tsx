import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../materials/globalStyle';
import Header from './header';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

interface Props {
  title: string;
}

const Layout: React.SFC<Props> = ({ children, title }) => (
  <>
    <GlobalStyle />
    <Header siteTitle={title} />
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  </>
);

export default Layout;
