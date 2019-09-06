import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Colors from '../materials/colors';
import Layout from '../components/Layout';
import MarkdownParser from '../components/MarkdownParser';

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
    allFiles: {
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
  margin-top: 20px;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  width: 100%;
  padding: 40px 0;
  background: rgba(${Colors.white}, 0.2);
`;

const Content = styled.div`
  padding: 0 20px;
  max-width: 650px;
`;

const Job: React.SFC<Props> = ({ data }) => {
  const { title, description } = data.allJobsJson.edges[0].node;
  const jobApplicationTeaser = data.allFile.edges[0].node.childWidgetsJson;
  return (
    <Layout>
      <Main>
        <Wrapper>
          <Content>
            <h1>{title}</h1>
            <MarkdownParser source={description} />
            <h2>{jobApplicationTeaser.title}</h2>
            <MarkdownParser source={jobApplicationTeaser.text} />
          </Content>
        </Wrapper>
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
