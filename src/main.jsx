import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Root from "./routes/root";
import Home from "./routes/home";
import About from "./routes/about";
import ErrorPage from "./error-page";
// import './styles/scroll-timeline';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#80FFFF',
      text: '#000A0A',
    },
    whitebg: {
      main: '#FFFFFF',
      text: '#0D0D0D',
    },
    blackbg: {
      main: '#000000',
      text: '#F2F2F2',
    },
    // secondary: {
    //   main: green[500],
    // },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
      {/* <PolyFill/> */}
    </React.StrictMode>
  </ThemeProvider>,
)