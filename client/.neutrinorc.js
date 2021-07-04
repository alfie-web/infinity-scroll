const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
// const styles = require('@neutrinojs/style-loader');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    // styles({
    //   // Override the default file extension of `.css` if needed
    //   test: /\.(css|sass|scss)$/,
    //   modulesTest: /\.module\.(css|sass|scss)$/,
    //   loaders: [
    //     {
    //       loader: 'sass-loader',
    //       useId: 'sass',
    //     },
    //   ],
    // }),
    airbnb({
      eslint: {
        baseConfig: {
          rules: {
            'babel/semi': 'off',
            'babel/no-unused-expressions': 0,
            'consistent-return': 0,
            'import/no-extraneous-dependencies': 0,
            'import/extensions': 0,
            'react/require-default-props': 0,
            'react/forbid-prop-types': 0,
            'react/self-closing-comp': 0,
            'no-console': 0,
            'no-underscore-dangle': [
              'error',
              {
                allow: [
                  '_audio_data',
                  '_id',
                  '_lottie_data',
                  '_video_data',
                  '_react_key',
                  '_attribution',
                  '_wizard',
                  '_getBoundingClientRect',
                ],
              },
            ],
          }
        }
      }
    }),
    react({
      html: {
        title: 'client'
      },
      style: {
        test: /\.(css|sass|scss)$/,
        modulesTest: /\.module\.(css|sass|scss)$/,
        loaders: [
          { loader: require.resolve('sass-loader'), useId: 'sass' }
        ]
      }
    }),
    jest(),
  ],
};
