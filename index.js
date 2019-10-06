import { AppRegistry } from 'react-native';
import App from './src/containers/app';
import { name as appName } from './app.json';

if (__DEV__) {
    import('./src/configs/reactotronConfig').then(() => {
        console.tron.clear();
        console.tron.log('Reactotron Configured');
    });
}
AppRegistry.registerComponent(appName, () => App);
