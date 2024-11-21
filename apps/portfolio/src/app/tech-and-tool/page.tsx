'use client';

import React from 'react';
import styles from './styles.module.scss';
import {
  BASIC_TECH_STACKS,
  SUB_TECH_STACKS,
  TECH_STACKS,
} from '../../content/TECHSTACK';

const TechAndToolPage = () => {
  return (
    <div className="my-24 flex flex-col text-neutral-300 max-w-[1200px] mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {TECH_STACKS.map((tech) => (
          <div key={tech.name} className={styles['card']}>
            <h2>{tech.name}</h2>
            <div className={styles['content']}>
              <span>{tech.icon}</span>
              <span>{tech.description || '---'}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3">
        {SUB_TECH_STACKS.map((tech) => (
          <div key={tech.name} className={styles['card']}>
            <h2>{tech.name}</h2>
            <div className={styles['content']}>
              {tech.icon}
              <p>Lorem Ipsum</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3">
        {BASIC_TECH_STACKS.map((tech) => (
          <div key={tech.name} className={styles['card']}>
            <h2>{tech.name}</h2>
            <div className={styles['content']}>
              {tech.icon}
              <p>Lorem Ipsum</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechAndToolPage;
