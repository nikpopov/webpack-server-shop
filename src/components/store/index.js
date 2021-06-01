import {createStore,combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {shopReducer} from "./reducers/shopReducer";

const rootReducers=combineReducers({
    shop:shopReducer

});
export const store=createStore(rootReducers,composeWithDevTools())