import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Colors from '../materials/colors';
import Layout from '../components/Layout';

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
  padding: 40px 20px;
  text-align: center;
  background: rgba(${Colors.white}, 0.2);
`;

const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

const Image = styled.img`
  max-width: 200px;
  border-radius: 50%;
  filter: sepia(70%);
`;

const TeamPage: React.SFC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "members" } }) {
          edges {
            node {
              childMembersJson {
                name
                role
                description
                img
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
          <Title>Team</Title>
          {data.map(member => {
            const {
 name, role, description, img 
} = member.node.childMembersJson;
            return (
              <Card>
                <Subtitle>{name}</Subtitle>
                <Subtitle>{role}</Subtitle>
                <CardContent>
                  <Image src={img} alt={name} />
                  <Text>{description}</Text>
                </CardContent>
              </Card>
            );
          })}
        </Wrapper>
      </Main>
    </Layout>
  );
};

export default TeamPage;
