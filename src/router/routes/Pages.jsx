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
    // Robots Page
    path: '/technical/robots/',
    component: lazy(() => import('../../view/components/components-page')),
    layout: 'VerticalLayout'
  }
  // {
  //   path: '/components/navigation/steps',
  //   component: lazy(() => import('../../view/components/navigation/steps')),
  //   layout: 'VerticalLayout'
  // },
  // ON-PAGE SEO
  // {
  //   path: '/apps/calendar',
  //   component: lazy(() => import('../../view/apps/calendar')),
  //   layout: 'VerticalLayout'
  // },
  // OFF-PAGE SEO
  // {
  //   path: '/apps/ecommerce/payment',
  //   component: lazy(() => import('../../view/apps/ecommerce')),
  //   layout: 'VerticalLayout'
  // },
  // LOCAL SEO
  // {
  //   path: '/pages/landing',
  //   component: lazy(() => import('../../view/pages/landing')),
  //   layout: 'FullLayout'
  // },
];

export default PagesRoutes;
