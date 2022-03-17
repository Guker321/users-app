import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../routes/Layout';


const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  );
};

export default AppRouter;
