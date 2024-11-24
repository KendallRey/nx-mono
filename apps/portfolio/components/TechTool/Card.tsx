import React from 'react';
import styles from './Card.module.scss';

const Card: React.FC<ITechToolStack> = (props) => {
  const { name, icon, description } = props;
  return (
    <div key={name} className={styles['card']}>
      <h2>{name}</h2>
      <div className={styles['content']}>
        <span className={styles['icon']}>{icon}</span>
        <span className={styles['description']}>{description || '---'}</span>
      </div>
    </div>
  );
};

export default Card;
