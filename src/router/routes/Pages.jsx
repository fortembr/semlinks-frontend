import { lazy } from 'react';

const PagesRoutes = [
  // MAIN
  {
    path: '/main/dashboard/analytics',
    component: lazy(() => import('../../view/main/dashboard/analytics')),
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
