import React from 'react';
import { Outlet } from 'react-router-dom';
import FilterBar from '../../ui/FilterBar';


const Layout: React.FC = () => (
  <>
    <FilterBar />
    <Outlet />
  </>
);

export default Layout;
