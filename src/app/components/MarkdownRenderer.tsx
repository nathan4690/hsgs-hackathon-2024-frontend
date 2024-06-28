'use client'

import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
// import mermaid from 'mermaid';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typeset();
    }
  }, [content]);

  return (
    <div className="prose prose-lg prose-invert mx-auto">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        className="dark:prose-dark"
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
