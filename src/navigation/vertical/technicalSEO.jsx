import React from 'react';
import { Scanning, Setting } from 'iconsax-react';

import IntlMessages from '../../layout/components/lang/IntlMessages';

const technicalSEO = [
  {
    header: 'Technical SEO'
  },
  {
    id: 'robots-menu-item',
    title: 'Robots',
    icon: <Scanning size={18} />,
    navLink: '/technical/robots'
  },
  {
    id: 'sitemap-menu-item',
    title: 'Sitemaps',
    icon: <Setting size={18} />,
    tag: <IntlMessages id="Coming Soon" />
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

export default technicalSEO;
