import React from 'react';
import { observer } from 'mobx-react-lite';
import Loading from '../../components/ui/Loading';
import usersStore from '../stores/usersStore';
import UserCard from './UserCard';

import classes from './UsersList.module.scss';

const UsersList: React.FC = observer(() => {
  const { usersData, usersLoading, usersError } = usersStore;

  return (
    <div className={classes.component}>
      <h2>Список пользователей</h2>
      {usersError && <p>{usersError}</p>}
      {usersLoading && <Loading />}
      {usersData.map(user => <UserCard key={user.id} {...user} />)}
    </div>

  );
});

export default UsersList;
