import React from 'react';
import { Health } from 'iconsax-react';

// import IntlMessages from '../../layout/components/lang/IntlMessages';

const main = [
  {
    header: 'Main'
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Health size={18} />,
  {
    id: 'dashboards-ecommerce',
    title: <IntlMessages id="sidebar-dashboards-ecommerce" />,
    icon: <Setting size={18} />,
    navLink: '/main/dashboard/ecommerce'
  },
  {
    id: 'dashboards-nft',
    title: <IntlMessages id="sidebar-dashboards-nft" />,
    icon: <Grid5 size={18} />,
    navLink: '/main/dashboard/nft'
    navLink: '/'
  }
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
