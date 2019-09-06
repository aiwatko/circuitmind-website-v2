import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Spacing from '../materials/spacing';
import Link from '../components/Link';
import Layout from '../components/Layout';
import Map from '../components/Map';
import MarkdownParser from '../components/MarkdownParser';
import PageContent from '../components/PageContent';

interface Data {
  title: string;
  map: string;
  addressSubtitle: string;
  address: string;
  contact: string;
  contactSubtitle: string;
}

const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: ${Spacing.m};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  padding: 0 ${Spacing.m};
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-column-gap: ${Spacing.m};
  grid-row-gap: ${Spacing.m};

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${Spacing.lg};
`;

const Title = styled.h1``;

const Subtitle = styled.h2`
  margin: 0;
`;

const AddressParagraph = styled.p`
  margin: 0;
`;

const ContactPage: React.SFC = () => {
  const data: Data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "pages" }, name: { eq: "contact" } }) {
          edges {
            node {
              childPagesJson {
                title
                map
                addressSubtitle
                address
                contact
                contactSubtitle
              }
            }
          }
        }
      }
    `,
  ).allFile.edges[0].node.childPagesJson;

  const {
 title, map, addressSubtitle, address, contactSubtitle, contact 
} = data;

  const [lng, lat] = JSON.parse(map).coordinates as number[];

  return (
    <Layout>
      <Main>
        <PageContent>
          <Wrapper>
            <Title>{title}</Title>
            <ContentWrapper>
              <Content>
                <div>
                  <Subtitle>{addressSubtitle}</Subtitle>
                  <MarkdownParser source={address} renderers={{ paragraph: AddressParagraph }} />
                  <Link href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}>Get directions</Link>
                </div>
                <div>
                  <Subtitle>{contactSubtitle}</Subtitle>
                  <Link href={`mailto:${contact}`}>{contact}</Link>
                </div>
              </Content>
              <Content>
                <Map lng={lng} lat={lat} zoom={13} />
              </Content>
            </ContentWrapper>
          </Wrapper>
        </PageContent>
      </Main>
    </Layout>
  );
};

export default ContactPage;
