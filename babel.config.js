// Load variables from the local env generated  by AppCenter
// which is currently the only dependency using this
require('dotenv').config();

const platform =
    // Default to react-native platform
    'react-native';

module.exports = api => {
    api.cache(true);

    return {
        'react-native': {
            presets: ['module:metro-react-native-babel-preset']
        },
        web: {
            // See /lib/herbalife-ui-kit/.storybook/webpack.config.js
        },
        appium: {
            presets: ['module:metro-react-native-babel-preset'],
            // This plugin was created as a workaround for the issue
            // with appium not finding testID properties in React Native ecosystem
            plugins: [
                [
                    'jsx-property-alias',
                    {
                        properties: {
                            testID: 'accessibilityLabel'
                        }
                    }
                ]
            ]
        }
    }[platform];
};
