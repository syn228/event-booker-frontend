import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from "redux"
import reducer from "./src/reducer/reducer"
import { Provider } from "react-redux"

const store = createStore(reducer)

ReactDOM.render(
<Provider store={store}>
<Router>
    <App />
</Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
