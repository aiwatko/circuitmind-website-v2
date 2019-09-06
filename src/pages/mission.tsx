import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Narrative from '../components/Narrative';
import PageContent from '../components/PageContent';

interface Data {
  title: string;
  intro: string;
  video: string;
  videoDescription: string;
}

const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
`;

const Title = styled.h1``;

const Text = styled.p`
  line-height: 1.5;
`;

const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56%;
  height: 0;
  width: 100%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const MissionPage: React.SFC = () => {
  const data: Data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "pages" }, name: { eq: "mission" } }) {
          edges {
            node {
              childPagesJson {
                title
                intro
                video
                videoDescription
              }
            }
          }
        }
      }
    `,
  ).allFile.edges[0].node.childPagesJson;

  const {
 title, intro, videoDescription, video 
} = data;
  return (
    <Layout>
      <Main>
        <PageContent>
          <Wrapper>
            <Title>{title}</Title>
            <Narrative>
              <Text>{intro}</Text>
            </Narrative>
            <IframeWrapper>
              <Iframe
                title={videoDescription}
                src={video}
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </IframeWrapper>
          </Wrapper>
        </PageContent>
      </Main>
    </Layout>
  );
};

export default MissionPage;
