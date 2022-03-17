import React from 'react';

import styles from './User.module.scss';

type UserProps = {};

const User: React.FC<UserProps> = (props) => {
  return (
    <div className={styles.component}>
      User
    </div>
  );
};

export default User;
