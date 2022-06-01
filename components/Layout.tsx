import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <TopBar />
      <SideBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
