import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from 'components/Sidebar/Sidebar';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Game from 'components/Game/Game';

export interface ISiteLayout {}

export default function Site() {
  const [sidebarClosed, setSidebarClosed] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  const getRoutes = (routes) => {
    return routes.map((prop) => {
      if (prop.layout === '') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={prop.layout + prop.path}
          />
        );
      }
      return null;
    });
  };

  return (
    <div className="site">
      <div className="app-sidebar">
        <Sidebar closed={sidebarClosed} toggleSidebar={handleToggleSidebar} />
      </div>
      <div className="app-navbar">
        <Navbar toggleSidebar={handleToggleSidebar} />
      </div>
      <div className="app-content">
        <Game />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}
