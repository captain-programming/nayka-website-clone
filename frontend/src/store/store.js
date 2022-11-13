import {legacy_createStore,applyMiddleware, combineReducers, compose} from 'redux';
import  {getProductReducer, getProductByIdReducer} from "./product/product.reducer";
import thunk from "redux-thunk";
import authReducer from './auth/auth.reducer';
import { cartReducer } from './Cart/cart.reducer';

const rootReducer = combineReducers({
	getProductReducer,
	getProductByIdReducer,
	auth:authReducer,
	cart:cartReducer

});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));
