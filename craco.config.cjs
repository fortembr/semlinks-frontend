const CracoLessPlugin = require('craco-less-plugin');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        alias: {
          'react-dom$': 'react-dom/profiling'
        }
      }
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyVars: {
          hack: `true;@import "${require.resolve('./src/assets/less/yoda-theme.less')}";`
        },
        javascriptEnabled: true
      }
    }
  ]
};
