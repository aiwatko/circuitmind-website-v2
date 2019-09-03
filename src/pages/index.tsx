import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
// @ts-ignore
import data from '../../content/home.json';

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

const IndexPage = () => (
  <Layout isLogoHidden>
    <Logo src='images/logo.svg' alt='Logo' />
    <div>
      <Title>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>
    </div>
  </Layout>
);

export default IndexPage;
