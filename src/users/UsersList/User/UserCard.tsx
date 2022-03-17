import React from 'react';
import { UsersModel } from '../../models';

import classes from './User.module.scss';

const UserCard: React.FC<UsersModel> = (props) => {
  const { name, address, company, id } = props;
  return (
    <div key={id} className={classes.component}>
      <div className={classes.info}>
        <p><span>ФИО: </span>{name}</p>
        <p><span>город: </span>{address.city}</p>
        <p><span>компания: </span>{company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;

