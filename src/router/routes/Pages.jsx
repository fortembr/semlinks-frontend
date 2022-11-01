import { lazy } from 'react';

const PagesRoutes = [
  // MAIN
  {
    // Dashboard Page
    path: '/',
    component: lazy(() => import('../../view/main/dashboard')),
    layout: 'VerticalLayout'
  },
  {
    component: lazy(() => import('../../view/main/layouts/page-layouts/vertical')),
    layout: 'VerticalLayout'
  },
  {
    layout: 'VerticalLayout'
  }
];

export default PagesRoutes;
