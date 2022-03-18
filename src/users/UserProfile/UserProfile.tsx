import React from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { UsersModel } from '../models';
import usersStore from '../stores/usersStore';

import classes from './UserProfile.module.scss';

type UserProfileProps = {};

const UserProfile: React.FC<UserProfileProps> = observer((props) => {
  const { id } = useParams();
  const currentUser: UsersModel | undefined = usersStore.usersData.find(user => user.id === Number(id));
  if (currentUser !== undefined) {
    const { name, username, email, phone, website } = currentUser;
    const { street, city, zipcode } = currentUser.address;
  }
  

  return (
    <div className={classes.component}>
      UserProfile
    </div>
  );
});

export default UserProfile;
