import React from 'react';

import classes from './FilterBar.module.scss';

type FilterBarProps = {};

const FilterBar: React.FC<FilterBarProps> = (props) => {
  return (
    <div className={classes.component}>
      <div className={classes.sort}>
        <span className={classes.title}>Сортировка</span>
        <button className={classes.button}>по городу</button>
        <button className={classes.button}>по компании</button>
      </div>
    </div>
  );
};

export default FilterBar;
