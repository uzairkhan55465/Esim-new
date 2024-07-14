// src/MainLayout.js
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full h-[100vh] bg-[#f4f5fa]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
