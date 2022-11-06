import React from 'react';

import { Row, Col } from 'antd';
import { ExportSquare, ImportSquare, MoneyRecive, MoneySend, WalletMinus } from 'iconsax-react';

import HistoryUser1 from './../../../assets/images/memoji/user-avatar-5.png';
import HistoryUser2 from './../../../assets/images/memoji/user-avatar-6.png';
import HistoryUser3 from './../../../assets/images/memoji/user-avatar-7.png';

import FeatureCard from './featureCard';
import BalanceCard from './balanceCard';
import HistoryCard from './historyCard';

export default function Dashboard() {
  return (
    <Row
      gutter={[32, 32]}
      className='hp-mb-32'
    >
      <Col
        flex='1'
        className='hp-overflow-hidden'
      >
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <h1 className='hp-mb-0'>Dashboard</h1>
          </Col>

          <Col span={24}>
            <HistoryCard
              list={[
                {
                  avatar: HistoryUser1,
                  avatarBg: ' hp-bg-danger-4',
                  name: 'Edward Adams',
                  title: 'Product Designer',
                  price: '$ 7734.32',
                  number: '30432',
                  percent: '23.23%',
                },
                {
                  avatar: HistoryUser2,
                  avatarBg: ' hp-bg-info-4',
                  name: 'John Doe',
                  title: 'Product Designer',
                  price: '$ 7614.43',
                  number: '949',
                  percent: '19.03%',
                },
                {
                  avatar: HistoryUser3,
                  avatarBg: ' hp-bg-warning-4',
                  name: 'Fazıl Say',
                  title: 'Product Designer',
                  price: '$ 6789.19',
                  number: '732',
                  percent: '13.98%',
                },
              ]}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
