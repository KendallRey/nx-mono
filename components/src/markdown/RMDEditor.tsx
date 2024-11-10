"use client";

import dynamic from "next/dynamic";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { IMarkdownEditor } from "@uiw/react-markdown-editor";
import { ComponentType } from "react";

export const MarkdownEditor = dynamic(() => import("@uiw/react-markdown-editor").then((mod) => mod.default), {
  ssr: false,
});

export const RMarkdownEditor: React.FC<IMarkdownEditor> = (props) => {
  return (
    <div data-color-mode="dark">
      <div className="wmde-markdown-var"> </div>
      <MarkdownEditor {...props} />
    </div>
  );
};
