import React from 'react';
import { Health } from 'iconsax-react';

// import IntlMessages from '../../layout/components/lang/IntlMessages';

const main = [
  {
    header: 'Main',
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Health size={18} />,
    navLink: '/',
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: <Health size={18} />,
    navLink: '/projects/',
  },
  // {
  //   id: 'ecommerce',
  //   title: <IntlMessages id="sidebar-apps-ecommerce" />,
  //   icon: <Award size={18} />,
  //   children: [
  //     {
  //       id: 'shop',
  //       title: <IntlMessages id="sidebar-apps-ecommerce-shop" />,
  //       navLink: '/apps/ecommerce/shop'
  //     },
  //   ]
  // },
];

export default main;
