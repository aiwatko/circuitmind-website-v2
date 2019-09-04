import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

import Colors from '../materials/colors';

const Link = styled(GatsbyLink)`
  color: rgb(${Colors.white});

  &:visited,
  &:hover {
    color: rgb(${Colors.white});
  }
`;

export default Link;
