import { IRootState, rootReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

export type GetState = () => IRootState;
const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
});

export const STORE = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));
