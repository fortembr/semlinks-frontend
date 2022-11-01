import dashboards from './dashboards';
import localSEO from './localSEO';
import offPageSEO from './offPageSEO';
import onPageSEO from './onPageSEO';
import technicalSEO from './technicalSEO';

const navigation = [...dashboards, ...technicalSEO, ...onPageSEO, ...offPageSEO, ...localSEO];

export default navigation;
