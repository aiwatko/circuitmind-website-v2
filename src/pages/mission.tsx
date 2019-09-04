import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Colors from '../materials/colors';
import Layout from '../components/Layout';

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
  width: 100%;
  padding: 40px 0;
  background: rgba(${Colors.white}, 0.2);
`;

const Title = styled.h1``;

const Text = styled.p`
  margin: 20px;
  line-height: 1.5;
  max-width: 650px;
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
        <Wrapper>
          <Title>{title}</Title>
          <Text>{intro}</Text>
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
      </Main>
    </Layout>
  );
};

export default MissionPage;
