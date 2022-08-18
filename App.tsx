/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import ErrorBoundary from 'react-native-error-boundary';

import Error from './src/sharedComponents/Error';
import {ThemeProvider} from 'styled-components/native';
import theme, {paperTheme} from './src/styles/theme';
import {store, persistor} from './src/store';

import EntryStack from './src/EntryStack';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={paperTheme}>
            <ThemeProvider theme={theme}>
              <EntryStack />
            </ThemeProvider>
          </PaperProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
