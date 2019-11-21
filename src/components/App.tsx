import {hot} from 'react-hot-loader/root';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import 'assets/scss/site.scss';

import SiteLayout from 'layouts/Site';

const App = () => (
    <BrowserRouter>
        <SiteLayout/>
    </BrowserRouter>
);

export default hot(App);
