import { configureStore, ThunkAction, Action, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from "../features/cartSlice";
import { orderApi } from "./api/orderApi";
import { productApi } from "./api/productApi";

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
}

const rootReducer = combineReducers({
    cart: cartReducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
})

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({}).concat([orderApi.middleware, productApi.middleware]),
  
})

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
