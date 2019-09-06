import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Colors from '../materials/colors';
import Layout from '../components/Layout';
import Link from '../components/Link';

type Data = {
  node: {
    childJobsJson: {
      active: boolean;
      title: string;
      intro: string;
      linkText: string;
      fields: {
        slug: string;
      };
    };
  };
}[];

const Main = styled.main`
  display: flex;
  min-height: 80vh;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.h1`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
`;

const Subtitle = styled.h2`
  margin: 0;
`;
const Text = styled.p``;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  background: rgba(${Colors.white}, 0.2);
`;

const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const CareersPage: React.SFC = () => {
  const data: Data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "jobs" } }) {
          edges {
            node {
              childJobsJson {
                active
                title
                intro
                linkText
                fields {
                  slug
                }
              }
            }
          }
        }
      }
    `,
  ).allFile.edges;

  return (
    <Layout>
      <Main>
        <Wrapper>
          <Title>Join us!</Title>
          {data.map(job => {
            const {
 active, title, intro, linkText 
} = job.node.childJobsJson;
            const { slug } = job.node.childJobsJson.fields;
            return (
              active && (
                <Card key={slug}>
                  <Subtitle>{title}</Subtitle>
                  <CardContent>
                    <Text>{intro}</Text>
                    <Link isInternal to={slug}>
                      {linkText}
                    </Link>
                  </CardContent>
                </Card>
              )
            );
          })}
        </Wrapper>
      </Main>
    </Layout>
  );
};

export default CareersPage;
