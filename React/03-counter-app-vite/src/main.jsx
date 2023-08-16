import React from 'react';
import ReactDom from 'react-dom/client'
// import { App } from './OneApp';
// import { FirstApp } from './FirstApp';
import { ConterApp } from './ConterApp'; 

import './styles.css';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <FirstApp /> */}
        <ConterApp value={12} />
    </React.StrictMode>
)