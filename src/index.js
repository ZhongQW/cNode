import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
/*创建数据仓库 、 (异步请求)管理中间件*/
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import reducer from './reducers/index'

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
