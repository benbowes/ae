import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';

import makeStore from './store';
import mockPreloadedState from './mockPreloadedState';
import theme from './theme';
import GlobalStyles from './theme/GlobalStyles';

const App: React.FC = () => (
    <Provider store={makeStore(mockPreloadedState)}>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Routes />
            </>
        </ThemeProvider>
    </Provider>
);

export default App;
