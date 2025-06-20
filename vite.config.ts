import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    server: {
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '1337-i4qxdmusxe4t12wsuz6hs-83453876.manusvm.computer'
      ]
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};

