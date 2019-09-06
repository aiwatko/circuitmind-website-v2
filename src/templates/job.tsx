import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Spacing from '../materials/spacing';
import Layout from '../components/Layout';
import MarkdownParser from '../components/MarkdownParser';
import Narrative from '../components/Narrative';
import PageContent from '../components/PageContent';

interface Props {
  data: {
    allJobsJson: {
      edges: {
        node: {
          active: boolean;
          title: string;
          body: string;
          description: string;
          fields: { slug: string };
        };
      }[];
    };
    allFile: {
      edges: {
        node: {
          childWidgetsJson: {
            title: string;
            text: string;
          };
        };
      }[];
    };
  };
}

const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: ${Spacing.m};
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  padding: 0 ${Spacing.m};
`;

const Job: React.SFC<Props> = ({ data }) => {
  const { title, description } = data.allJobsJson.edges[0].node;
  const jobApplicationTeaser = data.allFile.edges[0].node.childWidgetsJson;
  return (
    <Layout>
      <Main>
        <PageContent>
          <Wrapper>
            <Narrative>
              <h1>{title}</h1>
              <MarkdownParser source={description} />
              <h2>{jobApplicationTeaser.title}</h2>
              <MarkdownParser source={jobApplicationTeaser.text} />
            </Narrative>
          </Wrapper>
        </PageContent>
      </Main>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allJobsJson(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          title
          description
          fields {
            slug
          }
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "widgets" }, name: { eq: "jobApplicationTeaser" } }) {
      edges {
        node {
          childWidgetsJson {
            title
            text
          }
        }
      }
    }
  }
`;

export default Job;
