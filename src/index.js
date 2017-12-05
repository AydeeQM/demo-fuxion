import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'redux-zero/react'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom'
import App from './App';

const Index = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/home" component={App} />
            </Switch>
        </HashRouter>
    </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
