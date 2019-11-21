import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from 'components/App';
import reducer from './store/reducers/index';

require('../favicon.ico');

const store = createStore(reducer);

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App/>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

render();

if (module.hot) {
    module.hot.accept('./components/App', render);
}
