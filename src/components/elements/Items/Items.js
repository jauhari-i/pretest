import React from 'react';
import { Add } from '@material-ui/icons';
import styles from './styles.scoped.css';

const Items = ({}) => {
  const dummy = [
    'apple',
    'manggo',
    'papaya',
    'grape',
    'avocado',
    'apple',
    'manggo',
    'papaya',
    'grape',
    'avocado',
  ];
  return (
    <div className={styles['items-container']}>
      <div className={styles['items-category']}>
        <h1>Test</h1>
      </div>
      <div className={styles['items-content']}>
        {dummy.map((item, i) => (
          <div key={i + 'Item List'} className={styles['items-list']}>
            <p>{item}</p>
            <Add className={styles['items-button']} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
