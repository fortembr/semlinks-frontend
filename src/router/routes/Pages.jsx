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
    // Projects Page
    path: '/projects/',
    component: lazy(() => import('../../view/main/layouts/page-layouts/vertical')),
    layout: 'VerticalLayout'
  },
  // TECHNICAL SEO
  {
    layout: 'VerticalLayout'
  }
];

export default PagesRoutes;
