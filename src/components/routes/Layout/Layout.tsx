import React from 'react';
import UsersList from '../../../users/UsersList';
import FilterBar from '../../ui/FilterBar';


const Layout: React.FC = () => (
  <>
    <FilterBar />
    <UsersList />
  </>
);

export default Layout;
