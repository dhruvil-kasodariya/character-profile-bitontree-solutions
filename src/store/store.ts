import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
  Middleware,
  Dispatch,
} from "redux";
import logger from "redux-logger";
import { rootReducers } from "./root.reducer";

export type RootState = ReturnType<typeof rootReducers>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

interface CustomLoggerMiddleware extends Middleware {
  <S>(api: { getState: () => S }): (next: Dispatch) => (action: any) => any;
}

const middleware = [process.env.NODE_ENV !== "production" && logger].filter(
  (middleware): middleware is CustomLoggerMiddleware => Boolean(middleware)
);

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducers, undefined, composedEnhancers);
