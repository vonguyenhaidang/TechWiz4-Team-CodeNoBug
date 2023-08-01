import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import GlobalStyles from './component/GlobalStyles/GlobalStyles';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import GlobalState from './component/GlobalStates';
import { StoreProvider } from './component/store';

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
        <GlobalState>
          <GlobalStyles>
              <StoreProvider>
                <ChakraProvider theme={them}>
                    <App />
                </ChakraProvider>
              </StoreProvider>
          </GlobalStyles>
        </GlobalState>
    </React.StrictMode>,
);
