import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';

import Link from './Link';

interface Props {
  source: string;
  renderers: Record<string, ReactElement>;
}

const defaultRenderers = {
  link: Link,
};

const MarkdownParser: React.SFC<Props> = ({ source, renderers }) => (
  <ReactMarkdown source={source} renderers={{ ...defaultRenderers, ...renderers }} />
);

export default MarkdownParser;
