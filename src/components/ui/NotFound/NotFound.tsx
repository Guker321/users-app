import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

type NotFoundProps = {};

const NotFound: React.FC<NotFoundProps> = (props) => {
  return (
    <div className={styles.component}>
      <h1>Извините страница не найдена</h1>
      <Link to='/'>Вернутся на основную</Link>
    </div>
  );
};

export default NotFound;
