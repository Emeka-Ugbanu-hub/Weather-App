import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import {
  createMuiTheme,
   ThemeProvider
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
     primary: {
        main: "#F5B429",
        contrastText: "#fff"
               },
           },
          });
ReactDOM.render(
  <ThemeProvider theme={theme}>
  <App />
</ThemeProvider>,
  document.querySelector("#root")
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

