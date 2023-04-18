import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from "@mui/material/styles";
import { NewPalette, NewTypography } from './Theme/theme';
import { createTheme } from "@mui/material/styles";

import MainPage from './Pages/MainPage/MainPage';
import Header from './Components/MainHeader/header';

const theme = createTheme({
  palette: NewPalette,
  typography: NewTypography,
  
});
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <MainPage />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
