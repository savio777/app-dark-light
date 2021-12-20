import React from 'react';
import {useColorScheme, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import themes from './src/themes';
import Home from './src/screens/Home';
import {Theme} from './src/interfaces/ITheme';

export default function App() {
  // dark, light, null
  const deviceTheme = useColorScheme();
  const theme: Theme = themes[deviceTheme] || themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={deviceTheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <Home />
    </ThemeProvider>
  );
}
