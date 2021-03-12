import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

import { ColorModeScript } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    //customize theme color
    colors: {},
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false
    }
});
ReactDOM.render(
    <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
    </ChakraProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
