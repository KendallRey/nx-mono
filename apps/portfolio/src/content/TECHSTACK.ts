import { TechToolType } from '../enums/tech-tool';
import {
  THREE_JS_SVG,
  BLENDER_SVG,
  BOOTSTRAP_SVG,
  C_SHARP_SVG,
  DIGITAL_OCEAN_SVG,
  DJANGO_SVG,
  DOCKER_SVG,
  ELECTRON_JS_SVG,
  FIREBASE_SVG,
  GO_LANG_SVG,
  JAVASCRIPT_SVG,
  JIRA_SVG,
  KOTLIN_SVG,
  MATERIAL_UI_SVG,
  MONGO_DB_SVG_2,
  NEXT_JS_SVG,
  NODE_JS_SVG,
  NPM_SVG,
  POSTGRESQL_SVG,
  POSTMAN_SVG,
  PYTHON_SVG,
  RAILS_SVG,
  REACT_JS_SVG,
  REACT_NATIVE_SVG,
  REDUX_SVG,
  SASS_SVG,
  TAILWIND_CSS_SVG,
  TYPESCRIPT_SVG,
  UNITY_SVG,
  VERCEL_SVG,
  VITE_SVG,
  VS_CODE_SVG,
  ANDROID_SVG,
  PRISMA_SVG,
  NEST_JS_SVG,
} from './SVG';

const REACT_JS: ITechToolStack = {
  name: 'React JS',
  description:
    'It was taught at my 4th year college, and been using it ever since. Probably what got me here.',
  icon: REACT_JS_SVG,
  type: TechToolType.MAIN,
};

const NEXT_JS: ITechToolStack = {
  name: 'Next JS',
  description:
    'React framework with routing, middlewares, server-side rendering, etc., already setup. Now I always default to this in new apps.',
  icon: NEXT_JS_SVG,
  type: TechToolType.MAIN,
};

const TYPESCRIPT: ITechToolStack = {
  name: 'Typescript',
  description:
    'Generics, interfaces and static typing. After using it, I can never go back no matter how small of a scale the project is.',
  icon: TYPESCRIPT_SVG,
  type: TechToolType.MAIN,
};

const JAVASCRIPT: ITechToolStack = {
  name: 'Javascript',
  description:
    "I thought I know javascript, until I saw someone using a method I've never heard before. 'console.table()' instead of 'console.log()'",
  icon: JAVASCRIPT_SVG,
  type: TechToolType.MAIN,
};

const TAILWIND_CSS: ITechToolStack = {
  name: 'Tailwind CSS',
  description:
    'I always use in my apps, specially for layouts, flexbox and grids. Easy setup for responsiveness but can get quite long.',
  icon: TAILWIND_CSS_SVG,
  type: TechToolType.MAIN,
};

const MATERIAL_UI: ITechToolStack = {
  name: 'Material UI',
  description:
    'React component library I always use, the behavior of components are pretty good. Highly customizable, specially adding custom variants.',
  icon: MATERIAL_UI_SVG,
  type: TechToolType.MAIN,
};

const REDUX: ITechToolStack = {
  name: 'Redux (RTK)',
  description:
    'State management, data fetching and caching. I always used it for handling form states / values. Writing helper functions for actions / reducers.',
  icon: REDUX_SVG,
  type: TechToolType.MAIN,
};

const DJANGO: ITechToolStack = {
  name: 'Django',
  description: 'Studying for work, using as backend service for the APIs.',
  icon: DJANGO_SVG,
  type: TechToolType.MAIN,
};

const VS_CODE: ITechToolStack = {
  name: 'VS Code',
  description: '',
  icon: VS_CODE_SVG,
  type: TechToolType.MAIN,
};

const FIREBASE: ITechToolStack = {
  name: 'Firebase',
  description:
    'Yeah I know this too, like all web development students. But I stopped before "deploying GCP functions".',
  icon: FIREBASE_SVG,
  type: TechToolType.MAIN,
};

const BLENDER: ITechToolStack = {
  name: 'Blender',
  description:
    'Learned because for unity assets, stayed for satisfying renders, animations, 3D models, texturing, ...',
  icon: BLENDER_SVG,
  type: TechToolType.MAIN,
};

const SASS: ITechToolStack = {
  name: 'SASS',
  description:
    'Like CSS but with OOP, also functions / mixins, inheritance, variables, math operations, probably one of the time where nesting looks good.',
  icon: SASS_SVG,
  type: TechToolType.MAIN,
};

const POSTMAN: ITechToolStack = {
  name: 'Postman',
  description:
    "Testing APIs (even in different environments) and also documenting them. Only to realize it's taking too much time in developing, but why not!",
  icon: POSTMAN_SVG,
  type: TechToolType.MAIN,
};

// #region Tech Stacks
export const TECH_STACKS: ITechToolStack[] = [
  REACT_JS,
  NEXT_JS,
  TYPESCRIPT,
  JAVASCRIPT,
  TAILWIND_CSS,
  MATERIAL_UI,
  REDUX,
  DJANGO,
  // VS_CODE,
  FIREBASE,
  BLENDER,
  SASS,
  POSTMAN,
];
// #endregion

const BOOTSTRAP: ITechToolStack = {
  name: 'Bootstrap',
  description:
    'Pretty good, then tailwind came. Not using it as much as before.',
  icon: BOOTSTRAP_SVG,
  type: TechToolType.SUB,
};

const UNITY: ITechToolStack = {
  name: 'Unity',
  description:
    'Just a hobby of mine, along side blender. The variety of things to do like code, animation, texture, shaders, 3D model.',
  icon: UNITY_SVG,
  type: TechToolType.SUB,
};

const VERCEL: ITechToolStack = {
  name: 'Vercel',
  description: '',
  icon: VERCEL_SVG,
  type: TechToolType.SUB,
};

const REACT_NATIVE: ITechToolStack = {
  name: 'React Native',
  description:
    'React but mobile, quite fun after bashing your head figuring out how to set things up.',
  icon: REACT_NATIVE_SVG,
  type: TechToolType.SUB,
};

const ANDROID_STUDIO: ITechToolStack = {
  name: 'Android Studio',
  description:
    'Whenever I have an mobile app I need, why not develop it?. I always default to this along with Firebase. Maybe I can use it to control some Arduino with my phone thru Firebase.',
  icon: ANDROID_SVG,
  type: TechToolType.SUB,
};

// #region Sub Tech Stacks
export const SUB_TECH_STACKS: ITechToolStack[] = [
  BOOTSTRAP,
  UNITY,
  REACT_NATIVE,
];
// #endregion

const DOCKER: ITechToolStack = {
  name: 'Docker',
  description:
    'Studying for work, running any apps without worrying for compatibility and dependencies. Just worry for your RAM.',
  icon: DOCKER_SVG,
  type: TechToolType.SUB,
};

const DIGITAL_OCEAN: ITechToolStack = {
  name: 'Digital Ocean',
  description:
    'Using for work, but I can pretty much deploy web apps and setup some basic configurations.',
  icon: DIGITAL_OCEAN_SVG,
  type: TechToolType.SUB,
};

const ELECTRON_JS: ITechToolStack = {
  name: 'Electron JS',
  description:
    'React but desktop app, just tried learning it to complete the React Trilogy.',
  icon: ELECTRON_JS_SVG,
  type: TechToolType.SUB,
};

const GO_LANG: ITechToolStack = {
  name: 'Go Lang',
  description:
    "I want to learn another language I can use for backend. They also said it's fast, why not then.",
  icon: GO_LANG_SVG,
  type: TechToolType.SUB,
};

const JIRA: ITechToolStack = {
  name: 'Jira',
  description:
    'Used for work in managing tickets, sprints planning, and milestones I guess.',
  icon: JIRA_SVG,
  type: TechToolType.SUB,
};

const KOTLIN: ITechToolStack = {
  name: 'Kotlin',
  description:
    'Like java with typescript, not familiar with the syntax as much. Just used it in some mobile apps.',
  icon: KOTLIN_SVG,
  type: TechToolType.SUB,
};

const MONGO_DB: ITechToolStack = {
  name: 'Mongo DB',
  description: '',
  icon: MONGO_DB_SVG_2,
  type: TechToolType.SUB,
};

const NODE_JS: ITechToolStack = {
  name: 'Node JS',
  description: '',
  icon: NODE_JS_SVG,
  type: TechToolType.SUB,
};

const NPM: ITechToolStack = {
  name: 'NPM',
  description: `Used it for deploying a design system, just testing how can I "npm install" my own package.`,
  icon: NPM_SVG,
  type: TechToolType.SUB,
};

const POSTGRESQL: ITechToolStack = {
  name: 'PostgreSQL',
  description:
    'Used for work, now will be my default choice if I need a DB. Need some digging?, just pgAdmin.',
  icon: POSTGRESQL_SVG,
  type: TechToolType.SUB,
};

const PYTHON: ITechToolStack = {
  name: 'Python',
  description:
    'Using for work, learned the basic syntax. Pretty straight forward I guess.',
  icon: PYTHON_SVG,
  type: TechToolType.SUB,
};

const RAILS: ITechToolStack = {
  name: 'Ruby on Rails',
  description: '',
  icon: RAILS_SVG,
  type: TechToolType.SUB,
};

const THREE_JS: ITechToolStack = {
  name: 'Three JS',
  description:
    'I like blender so much, how can I express that in Web Development ?',
  icon: THREE_JS_SVG,
  type: TechToolType.SUB,
};

const VITE: ITechToolStack = {
  name: 'Vite',
  description: '',
  icon: VITE_SVG,
  type: TechToolType.SUB,
};

const C_SHARP: ITechToolStack = {
  name: 'C#',
  description: 'Learned some basic syntax from Unity.',
  icon: C_SHARP_SVG,
  type: TechToolType.SUB,
};

const PRISMA: ITechToolStack = {
  name: 'Prisma',
  description:
    'Studying for work, but since I learned drizzle beforehand. "Just use drizzle", I would say.',
  icon: PRISMA_SVG,
  type: TechToolType.SUB,
};

const NEST_JS: ITechToolStack = {
  name: 'NestJS',
  description:
    'Studying for work, much better than setting up node and express from scratch.',
  icon: NEST_JS_SVG,
  type: TechToolType.SUB,
};

// #region Basic Tech Stacks
export const BASIC_TECH_STACKS: ITechToolStack[] = [
  DOCKER,
  DIGITAL_OCEAN,
  ELECTRON_JS,
  GO_LANG,
  JIRA,
  KOTLIN,
  // MONGO_DB,
  // NODE_JS,
  NPM,
  POSTGRESQL,
  PYTHON,
  // RAILS,
  THREE_JS,
  // VITE,
  ANDROID_STUDIO,
  C_SHARP,
  PRISMA,
  NEST_JS,
];
// #endregion
