import React from 'react';

import AppRouter from '../AppRouter';
import classes from './App.module.scss';

const App: React.FC = () => {

  return (
    <main className={classes.component}>
        <AppRouter />
    </main>
  );
};

export default App;
