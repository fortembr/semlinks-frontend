import { lazy } from 'react';

const PagesRoutes = [
  // MAIN
  {
    path: '/main/dashboard/analytics',
    component: lazy(() => import('../../view/main/dashboard/analytics')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/dashboard/nft',
    component: lazy(() => import('../../view/main/dashboard/nft')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/dashboard/ecommerce',
    component: lazy(() => import('../../view/main/dashboard/ecommerce')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/widgets/cards/advance',
    component: lazy(() => import('../../view/main/widgets/cards/advance')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/widgets/cards/analytics',
    component: lazy(() => import('../../view/main/widgets/cards/analytics')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/widgets/cards/statistics',
    component: lazy(() => import('../../view/main/widgets/cards/statistics')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/widgets/selectbox',
    component: lazy(() => import('../../view/main/widgets/selectbox')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/widgets/illustration-set',
    component: lazy(() => import('../../view/main/widgets/illustration-set')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/widgets/crypto-icons',
    component: lazy(() => import('../../view/main/widgets/crypto-icons')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/widgets/user-icons',
    component: lazy(() => import('../../view/main/widgets/user-icons')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/widgets/flags',
    component: lazy(() => import('../../view/main/widgets/flags')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/widgets/charts',
    component: lazy(() => import('../../view/main/widgets/charts')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/layouts/divider',
    component: lazy(() => import('../../view/main/layouts/divider')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/layouts/grid-system',
    component: lazy(() => import('../../view/main/layouts/grid-system')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/layouts/page-layouts/boxed-layout',
    component: lazy(() => import('../../view/main/layouts/page-layouts/boxed')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/layouts/page-layouts/vertical-layout',
    component: lazy(() => import('../../view/main/layouts/page-layouts/vertical')),
    layout: 'VerticalLayout'
  },
  {
    path: '/main/layouts/page-layouts/horizontal-layout',
    component: lazy(() => import('../../view/main/layouts/page-layouts/horizontal')),
    layout: 'HorizontalLayout'
  },
  {
    path: '/main/layouts/page-layouts/full-layout',
    component: lazy(() => import('../../view/main/layouts/page-layouts/full')),
    layout: 'FullLayout'
  },

  // APPS
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../view/apps/calendar')),
    layout: 'VerticalLayout'
  },
  {
    path: '/apps/contact',
    component: lazy(() => import('../../view/apps/contact')),
    layout: 'VerticalLayout'
  },
  {
    path: '/apps/contact/contact-detail',
    component: lazy(() => import('../../view/apps/contact')),
    layout: 'VerticalLayout'
  },
  {
    path: '/apps/ecommerce/shop',
    component: lazy(() => import('../../view/apps/ecommerce')),
    layout: 'VerticalLayout'
  },
  {
    path: '/apps/ecommerce/inventory',
    component: lazy(() => import('../../view/apps/ecommerce')),
    layout: 'VerticalLayout'
  },
  {
    path: '/apps/ecommerce/inventory-new-product',
    component: lazy(() => import('../../view/apps/ecommerce/inventory/new-product')),
    layout: 'VerticalLayout'
  },
  {
    path: '/apps/ecommerce/wishlist',
    component: lazy(() => import('../../view/apps/ecommerce')),
    layout: 'VerticalLayout'
  },
  {
    path: '/apps/ecommerce/product-detail',
    component: lazy(() => import('../../view/apps/ecommerce')),
    layout: 'VerticalLayout'
  },
  {
    path: '/apps/ecommerce/checkout',
    component: lazy(() => import('../../view/apps/ecommerce')),
    layout: 'VerticalLayout'
  },
  {
    path: '/apps/ecommerce/address-information',
    component: lazy(() => import('../../view/apps/ecommerce')),
    layout: 'VerticalLayout'
  },
  {
    path: '/apps/ecommerce/payment',
    component: lazy(() => import('../../view/apps/ecommerce')),
    layout: 'VerticalLayout'
  },

  // PAGES
  {
    path: '/pages/landing',
    component: lazy(() => import('../../view/pages/landing')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/authentication/login',
    component: lazy(() => import('../../view/pages/authentication/login')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/authentication/recover-password',
    component: lazy(() => import('../../view/pages/authentication/recover-password')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/authentication/register',
    component: lazy(() => import('../../view/pages/authentication/register')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/authentication/reset-password',
    component: lazy(() => import('../../view/pages/authentication/reset-password')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/authentication-modern/login',
    component: lazy(() => import('../../view/pages/authentication-modern/login')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/authentication-modern/recover-password',
    component: lazy(() => import('../../view/pages/authentication-modern/recover-password')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/authentication-modern/register',
    component: lazy(() => import('../../view/pages/authentication-modern/register')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/authentication-modern/reset-password',
    component: lazy(() => import('../../view/pages/authentication-modern/reset-password')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/blank-page',
    component: lazy(() => import('../../view/pages/blank')),
    layout: 'VerticalLayout'
  },
  {
    path: '/pages/error-403',
    component: lazy(() => import('../../view/pages/errors/403')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/error-404',
    component: lazy(() => import('../../view/pages/errors/404')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/error-500',
    component: lazy(() => import('../../view/pages/errors/500')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/error-502',
    component: lazy(() => import('../../view/pages/errors/502')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/error-503',
    component: lazy(() => import('../../view/pages/errors/503')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/coming-soon',
    component: lazy(() => import('../../view/pages/errors/coming-soon')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/maintenance',
    component: lazy(() => import('../../view/pages/errors/maintenance')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/faq',
    component: lazy(() => import('../../view/pages/faq')),
    layout: 'VerticalLayout'
  },
  {
    path: '/pages/invoice',
    component: lazy(() => import('../../view/pages/invoice')),
    layout: 'VerticalLayout'
  },
  {
    path: '/pages/knowledge-base/knowledge-base-1',
    component: lazy(() => import('../../view/pages/knowledge-base/knowledge-base-1')),
    layout: 'VerticalLayout'
  },
  {
    path: '/pages/knowledge-base/knowledge-base-2',
    component: lazy(() => import('../../view/pages/knowledge-base/knowledge-base-2')),
    layout: 'VerticalLayout'
  },
  {
    path: '/pages/welcome',
    component: lazy(() => import('../../view/pages/lock-screen/welcome')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/password-is-changed',
    component: lazy(() => import('../../view/pages/lock-screen/password-is-changed')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/deactivated',
    component: lazy(() => import('../../view/pages/lock-screen/deactivated')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/lock',
    component: lazy(() => import('../../view/pages/lock-screen/lock')),
    layout: 'FullLayout'
  },
  {
    path: '/pages/pricing',
    component: lazy(() => import('../../view/pages/pricing')),
    layout: 'VerticalLayout'
  },
  {
    path: '/pages/profile/personel-information',
    component: lazy(() => import('../../view/pages/profile')),
    layout: 'VerticalLayout'
  },
  {
    path: '/pages/profile/notifications',
    component: lazy(() => import('../../view/pages/profile')),
    layout: 'VerticalLayout'
  },
  {
    path: '/pages/profile/activity',
    component: lazy(() => import('../../view/pages/profile')),
    layout: 'VerticalLayout'
  },
  {
    path: '/pages/profile/security',
    component: lazy(() => import('../../view/pages/profile')),
    layout: 'VerticalLayout'
  },
  {
    path: '/pages/profile/password-change',
    component: lazy(() => import('../../view/pages/profile')),
    layout: 'VerticalLayout'
  },
  {
    path: '/pages/profile/connect-with-social',
    component: lazy(() => import('../../view/pages/profile')),
    layout: 'VerticalLayout'
  }
];

export default PagesRoutes;
