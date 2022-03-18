import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={`/user/${id}`} className={classes.link}>Подробнее</Link>
    </div>
  );
};

export default UserCard;

