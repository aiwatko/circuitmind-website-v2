import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const Logo = styled.img`
  width: 150px;
  margin-right: 20px;
  margin-top: -40px;
`;

const Title = styled.h1`
  line-height: 0.85;
  margin: 20px 0;
  font-size: 70px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  max-width: 450px;

  @media only screen and (min-width: 600px) {
    margin: 5px 0 5px -5px;
    font-size: 100px;
    text-align: left;
  }
`;

const Subtitle = styled.h2`
  margin: 5px 0;
  font-weight: normal;
  font-size: 27px;
  text-align: center;

  @media only screen and (min-width: 600px) {
    font-size: 35px;
    text-align: left;
  }
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

const IndexPage: React.SFC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "pages" }, name: { eq: "home" } }) {
          edges {
            node {
              childPagesJson {
                title
                subtitle
              }
            }
          }
        }
      }
    `,
  ).allFile.edges[0].node.childPagesJson;

  return (
    <Layout isLogoHidden>
      <Main>
        <Logo src='images/logo.svg' alt='Logo' />
        <div>
          <Title>{data.title}</Title>
          <Subtitle>{data.subtitle}</Subtitle>
        </div>
      </Main>
    </Layout>
  );
};

export default IndexPage;
