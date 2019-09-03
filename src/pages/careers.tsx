import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Colors from '../materials/colors';
import Layout from '../components/layout';

const Main = styled.main`
  display: flex;
  min-height: 80vh;
  align-items: flex-start;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
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

const Subtitle = styled.h2``;
const Text = styled.p``;

const CardWrapper = styled.div`
  width: 100%;

  &:nth-of-type(2n) {
    padding-left: 0;
  }

  @media only screen and (min-width: 600px) {
    width: 50%;

    &:nth-of-type(2n) {
      padding-left: 20px;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  min-height: 450px;
  color: white;
  background: rgba(${Colors.white}, 0.2);
`;

const CareersPage: React.SFC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "jobs" } }) {
          edges {
            node {
              childJobsJson {
                title
                description
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
        <Title>Join us!</Title>
        <Wrapper>
          {data.map(job => {
            const { title, description } = job.node.childJobsJson;
            const { slug } = job.node.childJobsJson.fields;
            return (
              <CardWrapper>
                <Card>
                  <Subtitle>{title}</Subtitle>
                  <Text>{description}</Text>
                  <Link to={slug}>Read more about this role</Link>
                </Card>
              </CardWrapper>
            );
          })}
        </Wrapper>
      </Main>
    </Layout>
  );
};

export default CareersPage;
