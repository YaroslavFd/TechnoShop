// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {
            prettier: false,
            svgo: false,
            svgoConfig: {
              plugins: [{ removeViewBox: false }],
            },
            titleProp: true,
            ref: true,
          },
        },
        {
          loader: require.resolve('file-loader'),
          options: {
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
      // issuer: {
      //   and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
      // },
    },
    // // {
    // //   test: /\.svg$/,
    // //   exclude: /static\.svg$/,
    // //   oneOf: [
    // //     {
    // //       use: 'raw-loader',
    // //     },
    // //     {
    // //       loader: 'file-loader',
    // //       options: {
    // //         name: '/static/media/[name].[hash:8].[ext]',
    // //       },
    // //     },
    // //   ],
    // // },
    // // {
    // //   test: /\.(png|svg|jpg|gif)$/,
    // //   loader: 'file-loader',
    // //   options: {
    // //     name: 'static/media/[name].[hash].[ext]',
    // //   },
    // // },
    // {
    //   test: /\.svg$/,
    //   use: 'raw-loader',
    // },
    // // {
    // //   test: /\.svg$/i,
    // //   type: 'asset',
    // //   resourceQuery: /url/, // *.svg?url
    // // },
    // {
    //   exclude: [/\.svg$/],
    //   // test: /\.svg$/,
    //   // issuer: /\.[jt]sx?$/,
    //   // resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    //   // use: ['@svgr/webpack'],
    // },
    // {
    //   exclude: [/\.svg$/],
    //   test: /\.(png|jpg|gif)$/,
    //   loader: 'file-loader',
    //   options: {
    //     name: 'static/media/[name].[hash].[ext]',
    //   },
    // },
  ];

  return config;
};
