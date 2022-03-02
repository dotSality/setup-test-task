import { combineReducers, createStore } from "@reduxjs/toolkit";

import { appReducer } from "./reducer";

const reducers = combineReducers({
  app: appReducer,
});

export const store = createStore(reducers);
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

// @ts-ignore
window.store = store;
