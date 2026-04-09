const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    console.log("🔥 MF ATIVO");
    config.plugins.push(
      new NextFederationPlugin({
        name: 'pedidos',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Pedidos': './src/components/Pedidos',
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          'react-dom': { singleton: true, eager: true, requiredVersion: false },
        },
      })
    );

    return config;
  },
  reactStrictMode: false,
};