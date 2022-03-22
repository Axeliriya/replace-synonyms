const webpack = require('webpack');

module.exports = {
  images: {
    domains: ['courses-top.ru'],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg?$/,
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
      },
      oneOf: [
        {
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                  plugins: [
                    {
                      name: 'preset-default',
                      params: {
                        override: {
                          removeViewBox: false,
                        },
                      },
                    },
                  ],
                },
                titleProp: true,
              },
            },
          ],
        },
      ],
    });

    return config;
  },
};
