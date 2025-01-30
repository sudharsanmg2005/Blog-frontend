import  { Outlet } from 'react-router';
import React from 'react';
import Header from './Header';
const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
export default MainLayout;