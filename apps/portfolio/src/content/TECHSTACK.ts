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
    'It was taught at my 4th year college, and been using it ever since.',
  icon: REACT_JS_SVG,
  type: TechToolType.MAIN,
};

const NEXT_JS: ITechToolStack = {
  name: 'Next JS',
  description: '',
  icon: NEXT_JS_SVG,
  type: TechToolType.MAIN,
};

const TYPESCRIPT: ITechToolStack = {
  name: 'Typescript',
  description: '',
  icon: TYPESCRIPT_SVG,
  type: TechToolType.MAIN,
};

const JAVASCRIPT: ITechToolStack = {
  name: 'Javascript',
  description: '',
  icon: JAVASCRIPT_SVG,
  type: TechToolType.MAIN,
};

const TAILWIND_CSS: ITechToolStack = {
  name: 'Tailwind CSS',
  description: '',
  icon: TAILWIND_CSS_SVG,
  type: TechToolType.MAIN,
};

const MATERIAL_UI: ITechToolStack = {
  name: 'Material UI',
  description: '',
  icon: MATERIAL_UI_SVG,
  type: TechToolType.MAIN,
};

const REDUX: ITechToolStack = {
  name: 'Redux',
  description: '',
  icon: REDUX_SVG,
  type: TechToolType.MAIN,
};

const DJANGO: ITechToolStack = {
  name: 'Django',
  description: '',
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
  description: '',
  icon: FIREBASE_SVG,
  type: TechToolType.MAIN,
};

const BLENDER: ITechToolStack = {
  name: 'Blender',
  description: '',
  icon: BLENDER_SVG,
  type: TechToolType.MAIN,
};

const SASS: ITechToolStack = {
  name: 'SASS',
  description: '',
  icon: SASS_SVG,
  type: TechToolType.MAIN,
};

const POSTMAN: ITechToolStack = {
  name: 'Postman',
  description: '',
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
  VS_CODE,
  FIREBASE,
  BLENDER,
  SASS,
  POSTMAN,
];
// #endregion

const BOOTSTRAP: ITechToolStack = {
  name: 'Bootstrap CSS',
  description: '',
  icon: BOOTSTRAP_SVG,
  type: TechToolType.SUB,
};

const UNITY: ITechToolStack = {
  name: 'Unity',
  description: '',
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
  description: '',
  icon: REACT_NATIVE_SVG,
  type: TechToolType.SUB,
};

const ANDROID_STUDIO: ITechToolStack = {
  name: 'Android Studio',
  description: '',
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
  description: '',
  icon: DOCKER_SVG,
  type: TechToolType.SUB,
};

const DIGITAL_OCEAN: ITechToolStack = {
  name: 'Digital Ocean',
  description: '',
  icon: DIGITAL_OCEAN_SVG,
  type: TechToolType.SUB,
};

const ELECTRON_JS: ITechToolStack = {
  name: 'Electron JS',
  description: '',
  icon: ELECTRON_JS_SVG,
  type: TechToolType.SUB,
};

const GO_LANG: ITechToolStack = {
  name: 'Go Lang',
  description: '',
  icon: GO_LANG_SVG,
  type: TechToolType.SUB,
};

const JIRA: ITechToolStack = {
  name: 'Jira',
  description: '',
  icon: JIRA_SVG,
  type: TechToolType.SUB,
};

const KOTLIN: ITechToolStack = {
  name: 'Kotlin',
  description: '',
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
  description: '',
  icon: NPM_SVG,
  type: TechToolType.SUB,
};

const POSTGRESQL: ITechToolStack = {
  name: 'PostgreSQL',
  description: '',
  icon: POSTGRESQL_SVG,
  type: TechToolType.SUB,
};

const PYTHON: ITechToolStack = {
  name: 'Python',
  description: '',
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
  description: '',
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
  description: '',
  icon: C_SHARP_SVG,
  type: TechToolType.SUB,
};

const PRISMA: ITechToolStack = {
  name: 'Prisma',
  description: '',
  icon: PRISMA_SVG,
  type: TechToolType.SUB,
};

const NEST_JS: ITechToolStack = {
  name: 'NestJS',
  description: '',
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
  MONGO_DB,
  NODE_JS,
  NPM,
  POSTGRESQL,
  PYTHON,
  RAILS,
  THREE_JS,
  VITE,
  ANDROID_STUDIO,
  C_SHARP,
  PRISMA,
  NEST_JS,
];
// #endregion
