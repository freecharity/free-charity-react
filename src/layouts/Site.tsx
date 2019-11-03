import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routesJson from 'routes';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Game from 'components/Game/Game';

export interface ISiteLayout {}

export default class Site extends React.Component {
  getRoutes = (routes) => {
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

  render() {
    return (
      <div className="site">
        <div className="app-navbar">
          <Navbar />
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
}
