import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UsersList from '../../users/UsersList';
import NotFound from '../ui/NotFound';
import Layout from '../routes/Layout';
import UserProfile from '../../users/UserProfile';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<UsersList />} />
      <Route path="user/:id" element={<UserProfile />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRouter;
