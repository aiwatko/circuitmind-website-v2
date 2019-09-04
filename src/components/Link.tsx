import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';
import React from 'react';

import Colors from '../materials/colors';

interface Props {
  isInternal?: boolean;
  to?: string;
  href?: string;
}
const LinkStyles = css`
  color: rgb(${Colors.white});

  &:visited,
  &:hover {
    color: rgb(${Colors.white});
  }
`;

const GatsbyLinkEl = styled(GatsbyLink)`
  ${LinkStyles}
`;

const LinkEl = styled.a`
  ${LinkStyles}
`;

const Link: React.SFC<Props> = ({
 isInternal, to, href, ...rest 
}) => isInternal && to ? <GatsbyLinkEl to={to} {...rest} /> : <LinkEl href={href} {...rest} />;

export default Link;
