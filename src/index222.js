import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app/index.js';
import App from './components/app/app';
import './index.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


// import * as React from 'react';
// import ReactDOM from 'react-dom/client';
// import { StyledEngineProvider } from '@mui/material/styles';
// import Demo from './demo';

// ReactDOM.createRoot(document.querySelector("#root")).render(
//   <React.StrictMode>
//     <StyledEngineProvider injectFirst>
//       <Demo />
//     </StyledEngineProvider>
//   </React.StrictMode>
// );