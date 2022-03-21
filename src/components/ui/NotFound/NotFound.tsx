import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NotFound.module.scss';

const NotFound: React.FC = () => (
    <div className={classes.component}>
      <h1>Извините страница не найдена</h1>
      <Link to='/'>Вернутся на основную</Link>
    </div>
  );

export default NotFound;
