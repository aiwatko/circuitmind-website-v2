import React from 'react';
import styled from 'styled-components';

import Colors from '../materials/colors';
import Layout from '../components/layout';
// @ts-ignore
import data from '../../content/mission.json';

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
  padding: 30px 0;
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

const MissionPage: React.SFC = () => (
  <Layout>
    <Main>
      <Wrapper>
        <Title>{data.title}</Title>
        <Text>{data.intro}</Text>
        <IframeWrapper>
          <Iframe
            title={data.videoDescription}
            src={data.video}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </IframeWrapper>
      </Wrapper>
    </Main>
  </Layout>
);

export default MissionPage;
