import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import GlobalStyles from './component/GlobalStyles/GlobalStyles';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
const them = extendTheme({
    styles: {
      global: {
        body: {
          backgroundColor: "#fff",
        },
      },
    },
  });
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <ChakraProvider theme={them}>
                <App />
            </ChakraProvider>
        </GlobalStyles>
    </React.StrictMode>,
);
