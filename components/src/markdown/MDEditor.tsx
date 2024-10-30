"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

import * as MDCommands from "@uiw/react-md-editor/commands";
export const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export { MDCommands };
