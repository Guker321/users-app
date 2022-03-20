import React from 'react';

import classes from './UserProfile.module.scss';

import UserForm from './UserForm';

const UserProfile: React.FC = () => (
    <div className={classes.component}>
      <UserForm />
    </div>
  );

export default UserProfile;
