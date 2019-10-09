import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseLayout from './components/layout/BaseLayout';
import GridBaseLayout from './components/layout/GridBaseLayout';
import GridTest from './components/layout/GridTest';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// import darkBaseTheme from '@material-ui/styles/baseThemes/darkBaseTheme';
// import * as Colors from '@material-ui/styles/colors';
// import { fade } from '@material-ui/utils/colorManipulator';
import { MuiThemeProvider } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';
import {Switch, Route}from 'react-router-dom';
import Menu from './components/Menu/Menu';
import LayoutTest from './components/LayoutTest';

const libelleDarkTheme = () => {
  let overwrites = {
      MuiCssBaseline: {
        '@global': {
          '*': {
            'scrollbar-width': 'thin',
          },
          '*::webkit-scrollbar': {
            width: 220,
            height: 4,
          },
        },
      },
    "palette": {
      // 'type': 'dark',
      "primary1Color": "#1e88e5",
      "canvasColor": "#ffffffff",
      "accent2Color": "#78909c",
      "primary3Color": "#b0bec5",
      "accent1Color": "#00e5ff",
      "accent3Color": "#00b8d4"
    },
    "appBar": {
      "color": "#212121",
      "textColor": "#ffffff"
    },
    "raisedButton": {
      "primaryTextColor": "#ffffff"
    },
    "menuItem": {
      "hoverColor": "#2196f3"
    }
  };


  return createMuiTheme(overwrites);
}

const dark = {
  palette: {
    "common": {
      "black": "rgba(0, 0, 0, 1)",
      "white": "#fff"
    },
    "background": {
      "paper": "rgba(37, 43, 54, 1)",
      "default": "rgba(47, 56, 71, 1)"
    },
    "primary": {
      "light": "rgba(51, 139, 197, 1)",
      "main": "rgba(0, 111, 183, 1)",
      "dark": "rgba(0, 77, 128, 1)",
      "contrastText": "#fff"
    },
    "secondary": {
      "light": "rgba(71, 205, 239, 1)",
      "main": "rgba(26, 193, 235, 1)",
      "dark": "rgba(18, 135, 164, 1)",
      "contrastText": "#fff"
    },
    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "rgba(250, 250, 250, 1)"
    },
    "text": {
      "primary": "rgba(236, 232, 232, 1)",
      "secondary": "rgba(212, 206, 206, 1)",
      "disabled": "rgba(151, 148, 148, 1)",
      "hint": "rgba(182, 176, 176, 1)"
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey'
        }
      },
    },
  },
}

const darkTheme = createMuiTheme(dark);

function App() {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <div className="App">
      {/* <Switch> */}
        <Route path="/" component={LayoutTest} />
        {/* <Route path="/menu" component={Menu}></Route> */}
      {/* </Switch> */}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        {/* <BaseLayout/> */}
        {/* <GridBaseLayout/> */}
        {/* <GridTest /> */}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
