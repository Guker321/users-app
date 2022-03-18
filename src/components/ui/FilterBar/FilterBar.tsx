import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import usersStore from '../../../users/stores/usersStore';

import classes from './FilterBar.module.scss';

type FilterBarProps = {};

const FilterBar: React.FC<FilterBarProps> = observer((props) => {
  const { filterUsersData } = usersStore;
  const [filterOrder, setFilterOrder] = useState({
    byName: true,
    byCity: true,
    byCompany: true,
  })

  const filterByNameHandler = () => {
    filterUsersData('name', filterOrder.byName)
    setFilterOrder({
      ...filterOrder,
      byName: !filterOrder.byName
    })
  }
  const filterByCityHandler = () => {
    filterUsersData('address.city', filterOrder.byCity)
    setFilterOrder({
      ...filterOrder,
      byCity: !filterOrder.byCity
    })
  }
  const filterByCompanyHandler = () => {
    filterUsersData('company.name', filterOrder.byCompany)
    setFilterOrder({
      ...filterOrder,
      byCompany: !filterOrder.byCompany
    })
  }

  return (
    <div className={classes.component}>
      <div className={classes.sort}>
        <span className={classes.title}>Сортировка</span>
        <button onClick={filterByCityHandler} className={classes.button}>по городу</button>
        <button onClick={filterByCompanyHandler} className={classes.button}>по компании</button>
        <button onClick={filterByNameHandler} className={classes.button}>по имени</button>
      </div>
    </div>
  );
});

export default FilterBar;
