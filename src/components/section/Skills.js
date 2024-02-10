import React, { useState } from 'react';
import styles from './Skills.module.css';
import javascript from '../../image/skills/javascript.svg';
import html from '../../image/skills/html.svg';
import css from '../../image/skills/css.svg';
import react from '../../image/skills/react.svg';
import node from '../../image/skills/node.png';

const Skills = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.skill} id='Skills'>
      <h1>Habilidades</h1>
      <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
      <div>
        <img
          src={javascript}
          alt='javascript'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={hovered ? styles.hovered : ''}
        />
        <img
          src={html}
          alt='html'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={hovered ? styles.hovered : ''}
        />
        <img
          src={css}
          alt='css'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={hovered ? styles.hovered : ''}
        />
        <img
          src={react}
          alt='react'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={hovered ? styles.hovered : ''}
        />
        <img
          src={node}
          alt='node'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={hovered ? styles.hovered : ''}
        />
      </div>
    </div>
  );
}

export default Skills;
