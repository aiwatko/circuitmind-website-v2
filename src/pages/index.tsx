import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Spacing from '../materials/spacing';
import Layout from '../components/Layout';

interface Data {
  title: string;
  subtitle: string;
}

const Logo = styled.img`
  width: 150px;
  margin-right: ${Spacing.m};
  margin-top: -${Spacing.xl};
`;

const Title = styled.h1`
  line-height: 0.85;
  margin: ${Spacing.m} 0;
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
  const data: Data = useStaticQuery(
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

  const { title, subtitle } = data;

  return (
    <Layout isLogoHidden>
      <Main>
        <Logo src='img/logo.svg' alt='Logo' />
        <div>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </div>
      </Main>
    </Layout>
  );
};

export default IndexPage;
