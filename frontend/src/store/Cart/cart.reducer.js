import { CART_ADD_ERROR, CART_ADD_LOADING, CART_ADD_SUCCESS, CART_DELETE_ERROR, CART_DELETE_LOADING, CART_DELETE_SUCCESS, CART_GET_ERROR, CART_GET_LOADING, CART_GET_SUCCESS, CART_UPDATE_ERROR, CART_UPDATE_LOADING, CART_UPDATE_SUCCESS } from "./cart.types"



const initialData = {
    loading: false,
    error: false,
    data: []
}


export const cartReducer = (state = initialData, { type, payload }) => {
    switch (type) {
        case CART_GET_LOADING: return {
            ...state, loading: true,
        }
        case CART_GET_ERROR: return {
            ...state, loading: false, error: true
        }
        case CART_GET_SUCCESS: return {
            ...state, loading: false, error: false, data: payload
        }
        case CART_ADD_LOADING: return {
            ...state, loading: true,
        }
        case CART_ADD_ERROR: return {
            ...state, loading: false, error: true
        }
        case CART_ADD_SUCCESS: return {
            ...state, loading: false
        }
        case CART_UPDATE_LOADING: return {
            ...state, loading: true,
        }
        case CART_UPDATE_ERROR: return {
            ...state, loading: false, error: true
        }
        case CART_UPDATE_SUCCESS: return {
            ...state, loading: false, error: false,
        }
        case CART_DELETE_LOADING: return {
            ...state, loading: true,
        }
        case CART_DELETE_ERROR: return {
            ...state, loading: false, error: true
        }
        case CART_DELETE_SUCCESS: return {
            ...state, loading: false, error: false,
        }
        default: return {
            ...state
        }
    }
}