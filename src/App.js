import React from 'react';
import "./App.scss"
import Main from "./components/Main";
import {Provider} from "react-redux";
import {store} from "./components/store/index";

function App(props) {
    return (
        <Provider store={store}>
        <div>
            <h1>
                Hello webpack-server-shop !!!!
            </h1>
            <Main/>
        </div>
        </Provider>
    );
}

export default App;