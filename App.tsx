import React from 'react';
import {ThemeProvider} from 'styled-components';

import Home from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={{background: '#000', color: '#fff'}}>
      <Home />
    </ThemeProvider>
  );
}
