import React from 'react';
import { Setting } from 'iconsax-react';

import IntlMessages from '../../layout/components/lang/IntlMessages';

const onPageSEO = [
  {
    header: 'On-Page SEO'
  },
  {
    id: 'sitemap-menu-item',
    title: 'On-Page Module',
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

export default onPageSEO;
