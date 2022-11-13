// NPM Modules
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Custom Modules
import './assets/css/App.css';
import { LoginPage, PortalPage } from 'pages';

export default class App extends React.Component {
  public router = createBrowserRouter([
    {
      path: '/',
      element: <PortalPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ]);
  render() {
    return (
      <div className="App">
        <RouterProvider router={this.router} />
      </div>
    );
  }
}
