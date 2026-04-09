const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    config.output.publicPath = 'auto';

    config.plugins.push(
      new NextFederationPlugin({
        name: 'container',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          cardapio: 'cardapio@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          pedidos: 'pedidos@http://localhost:3002/_next/static/chunks/remoteEntry.js',
        },
        shared: {
          react: { singleton: true, requiredVersion: false, eager: true },
          'react-dom': { singleton: true, requiredVersion: false, eager: true },
        },
      })
    );

    return config;
  },
  reactStrictMode: false,
};