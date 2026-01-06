import type { MDXComponents } from "mdx/types";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";

import Preview from "@/components/preview";
import WaveIcon from "@/components/icons/wave-icon";
function getMDXComponents(): MDXComponents {
  return {
    ...defaultMdxComponents,
    WaveIcon,
    Preview,
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props} className="rounded-lg">
        <Pre className="text-sm bg-none">{props.children}</Pre>
      </CodeBlock>
    ),
  };
}

export const useMDXComponents = getMDXComponents;
