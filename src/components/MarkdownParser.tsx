import React from 'react';
import ReactMarkdown, { NodeType } from 'react-markdown';

import Link from './Link';

interface Props {
  source: string;
  renderers?: Record<NodeType, React.ElementType<any>>;
}

const defaultRenderers = {
  link: Link,
};

const MarkdownParser: React.SFC<Props> = ({ source, renderers }) => (
  <ReactMarkdown source={source} renderers={{ ...defaultRenderers, ...renderers }} />
);

export default MarkdownParser;
