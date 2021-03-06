import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const initialState = {};

const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, logger)
);

//create store, passing in reducers
const store = createStore(rootReducer, initialState, middleware);

export default store;
